import { useState } from "react";
import SettingBtn from "./SettingBtn";
import CreateNewChallenge from "./CreateNewChallenge";

export default function MainBox({ challenge }) {
  const [newChallenge, setNewChallenge] = useState(false);

  const handleCreateChallengeBtn = () => {
    setNewChallenge(true);
  };

  return (
    <div className="col-9 h-100 overflow-hidden d-flex flex-column">
      <div className="row bg-dark-subtle" style={{ height: "14%" }}>
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="h-100 d-flex align-items-center">
            <button className="btn fs-5 fw-bolder text-dark">
              <i className="bi bi-arrow-left-right"></i>
            </button>
            <h4 className="mt-1 fw-bold text-danger-emphasis d-inline-block">
              Mission Impossible
            </h4>
          </span>

          <SettingBtn handleCreateChallengeBtn={handleCreateChallengeBtn} />
        </div>
      </div>

      {newChallenge ? (
        <CreateNewChallenge
          handleCreateChallengeBtn={handleCreateChallengeBtn}
        />
      ) : (
        <div
  className="row h-100 p-4 overflow-y-scroll no-scrollbar bg-light rounded shadow"
  style={{ height: "85%" }}
>
  <div className="p-4 rounded-4 bg-white shadow-lg w-100">
    <h3 className="text-danger fw-bold mb-3 border-bottom pb-2">
      {challenge.name}
    </h3>
    <p className="text-secondary fs-6 mb-4">{challenge.description}</p>

    <div className="d-flex justify-content-between mb-4 px-1">
      <div className="text-dark-emphasis fs-6">
        <i className="bi bi-calendar-check me-2"></i>
        Total Days: <strong>{challenge.totalDays}</strong>
      </div>
      <div className="text-dark-emphasis fs-6">
        <i className="bi bi-check2-circle me-2"></i>
        Completed: <strong>{challenge.completedDays}</strong>
      </div>
    </div>

    <div className="mb-4">
      <h5 className="text-primary fw-semibold mb-2">
        <i className="bi bi-list-task me-2"></i>Daily Tasks
      </h5>
      <ul className="list-group shadow-sm rounded">
        {challenge.tasks.map(task => (
          <li key={task.id} className="list-group-item list-group-item-action">
            <i className="bi bi-check-square me-2 text-success"></i>{task.title}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h5 className="text-primary fw-semibold mb-2">
        <i className="bi bi-graph-up-arrow me-2"></i>Recent Progress
      </h5>
      <ul className="list-group">
        {challenge.progress.slice(-5).map(day => (
          <li key={day.day} className="list-group-item bg-light">
            <div className="d-flex justify-content-between">
              <strong>Day {day.day}</strong>
              <span className="text-muted small">{day.date}</span>
            </div>
            <div className="text-secondary mt-1">{day.message}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

      )}
    </div>
  );
}
