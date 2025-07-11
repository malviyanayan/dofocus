import MyNote from "./MyNote";

export default function MyNotes({myNotes, clickNote, showDetails}) {
  const noNoteMessage = <div className="text-center text-danger fs-5 fw-semibold w-100 mt-4">
    You have no notes yet
  </div>;

  const mainDiv = <div
        className="py-2 overflow-y-scroll no-scrollbar bg-white grid-container py-4"
        style={{ height: "87%" }}
      >
        
        {myNotes.map((myNote, index) => (
            <MyNote key={index} myNote={myNote} clickNote={clickNote} showDetails={showDetails} />
        ))}
        {/* <div className="row w-100 justify-start gap-2 my-3">
          
          <div className="col-3 border border-danger mb-3 rounded shadow-sm bg-body-tetiary" style={{height:'250px'}}></div>
          <div className="col-3 border border-danger mb-3 rounded shadow-sm bg-body-tetiary" style={{height:'250px'}}></div>
       </div> */}
      </div>;

    return (
      <>
        {myNotes.length === 0 ? noNoteMessage : mainDiv}
      </>
    );
}