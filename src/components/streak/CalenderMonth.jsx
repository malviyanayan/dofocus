function CalendarMonth({ progress, changeDate }) {
  const totalDays = progress.length;
  const startDate = new Date();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getLevelPercent = (level) => {
    switch (level) {
      case 1: return 33;
      case 2: return 66;
      case 3: return 100;
      default: return 0;
    }
  };

  const getDayProgress = (dayIndex) => {
    const day = progress.find((p) => p.day === dayIndex + 1);
    if (!day || !day.taskFeedback || day.taskFeedback.length === 0) return 0;

    const total = day.taskFeedback.reduce((acc, task) => acc + getLevelPercent(task.level), 0);
    const average = total / day.taskFeedback.length;

    return Math.round(average);
  };

  const renderRows = () => {
    const rows = [];

    const colorThemes = {
      success: { bg: "#00C9A7", text: "#ffffff" },
      warning: { bg: "#FFC107", text: "#000000" },
      danger: { bg: "#FF5252", text: "#ffffff" },
      neutral: { bg: "#90A4AE", text: "#ffffff" },
    };

    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const progressPercent = getDayProgress(i);
      let theme = colorThemes.neutral;
      if (progressPercent >= 80) theme = colorThemes.success;
      else if (progressPercent >= 50) theme = colorThemes.warning;
      else if (progressPercent > 0) theme = colorThemes.danger;

      rows.push(
        <div
          key={i}
          className="mb-3 p-3 rounded shadow-sm hover-zoom"
          style={{
            cursor: 'pointer',
            background: `#ffffff`,
            borderLeft: `6px solid ${theme.bg}`,
            transition: 'all 0.3s ease-in-out',
          }}
          onClick={() => changeDate(i)}
        >
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-medium text-secondary-emphasis" style={{ fontSize: "1rem" }}>{formatDate(date)}</span>
            <span className="badge rounded-pill text-bg-light" style={{ fontSize: "0.9rem" }}>Day {i + 1}</span>
          </div>
          <div className="progress rounded-pill" style={{ height: '14px', background: '#e3e6e8' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progressPercent}%`, backgroundColor: theme.bg }}
            >
              {progressPercent}%
            </div>
          </div>
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="no-scrollbar px-3 py-2" style={{ height: "100%", overflowY: "scroll", background: "#f4f6f9" }}>
      {renderRows()}
    </div>
  );
}

export default CalendarMonth;
