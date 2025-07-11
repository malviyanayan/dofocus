import CalendarMonth from "./CalenderMonth";

export default function DateBox({progress, changeDate}) {
return (
    <div className="col-3 shadow bg-light border-end border-dark" style={{height: "85vh"}}>
        {/* <div className="container mt-3 d-flex justify-content-center align-items-center gap-3" style={{ height: "7%" }}>
            <input type="date" className="border border-dark px-2 rounded h-100" />
            <button className="btn btn-success h-100 d-flex justify-content-center align-items-center px-3">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </div> */}

        <CalendarMonth progress={progress} changeDate={changeDate} />

    </div>
);
}
