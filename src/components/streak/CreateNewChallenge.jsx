export default function CreateNewChallenge({handleCreateChallengeBtn}){
    return (
    <div
  className="row h-100 p-2 overflow-y-scroll no-scrollbar border border-5 border-danger d-block"
  style={{ height: "85%" }}
>
  {/* Challenge Name */}
  <div className="mb-3">
    <label className="form-label fw-bold">Challenge Name</label>
    <input
      type="text"
      className="border border-secondary border-2 py-2 rounded-3 mt-2 w-100 px-2"
      style={{ outline: "none" }}
      placeholder="Enter challenge name"
    />
  </div>

  {/* Type Select */}
  <div className="mb-3">
    <label className="form-label fw-bold">Type</label>
    <select className="form-select" id="challengeType">
      <option value="challenge">Challenge</option>
      <option value="timetable">Timetable</option>
    </select>
  </div>

  {/* Start Date */}
  <div className="mb-3">
    <label className="form-label fw-bold">Start Date</label>
    <input
      type="date"
      className="form-control"
      id="startDate"
    />
  </div>

  {/* Challenge Steps */}
  <div className="mb-3">
    <label className="form-label fw-bold">Challenge Steps</label>
    <div id="stepInputs">
      {/* Dynamically rendered inputs here via React state */}
    </div>

    {/* Add Step */}
    <div className="d-flex gap-2 mt-2">
      <input
        type="text"
        className="form-control"
        id="stepInput"
        placeholder="Enter challenge step"
      />
      <input
        type="time"
        className="form-control d-none"
        id="stepTime"
      />
      <button className="btn btn-success" id="addStepBtn">Add</button>
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-end mt-3">
    <button className="btn btn-primary">OK</button>
  </div>
</div>

  );
}