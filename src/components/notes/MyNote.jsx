export default function MyNote({myNote, clickNote, showDetails}) {
  return (
    <div
      className="border border-dark rounded shadow-sm bg-body-tetiary grid-item py-2 px-3 hover-zoom"
      style={{ height: "200px", width: "300px" }}
      onClick={() => showDetails(myNote.id)}
    >
      <div className="w-100 h-100 overflow-hidden">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-truncate fw-bold">{myNote.title}</h4>
          
        </div>
        <div style={{textAlign:'justify'}} className="mx-2 text-secondary">
          {myNote.content}
        </div>
      </div>
    </div>
  );
}
