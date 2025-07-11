export default function SettingBtn({handleCreateChallengeBtn}) {
  return (
    <div className="btn-group dropstart">
      <button
        type="button"
        className="btn fs-5 d-flex justify-content-center align-items-center"
        style={{ width: "40px", height: "40px" }}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa-solid fa-gear text-danger-emphasis"></i>
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" type="button" onClick={() => handleCreateChallengeBtn()}>
            <i className="fas fa-plus me-2"></i> Create Challenge
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            <i className="fas fa-edit me-2"></i> Edit Details
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            <i className="fas fa-chart-line me-2"></i> View Progress
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            <i className="fas fa-gavel me-2"></i> Challenge Rules
          </button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item text-danger" type="button">
            <i className="fas fa-trash-alt me-2"></i> Delete Challenge
          </button>
        </li>
      </ul>
    </div>
  );
}
