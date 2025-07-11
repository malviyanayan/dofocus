export default function CompletedTodo({ completedTodos,markAsUncompleted ,deleteFromCompletedList }) {
  return (
    <ul className="list-group">
      {completedTodos.map((item,index) => (
        <li key={'completed'+index} className="list-group-item mt-1 border d-flex justify-content-between align-items-center mb-2 border-secondary-subtle rounded shadow-sm">
          <span>
            <input
              className="form-check-input me-1"
              type="checkbox"
              id={'completed-' + item.id}
              checked={true}
              onChange={() => markAsUncompleted(item)}
            />
            <label className="form-check-label ms-2 " htmlFor={'completed-' + item.id}>
              <del>{item.item}</del>
            </label>
          </span>

          <button className="btn btn-link border btn-sm me-2 px-3 text-dark text-decoration-none shadow-sm" onClick={() => {deleteFromCompletedList(item)}}>
            <i className="fas fa-trash-alt text-danger"></i>
          </button>
        </li>
        // <li key={index} className="list-group-item d-flex justify-content-between align-items-center mb-2 border border-success-subtle rounded">
        //   <span>
        //     <i className="fas fa-check me-2"></i> <del>{item}</del>
        //   </span>
        //   <span>
        //     <button className="btn btn-link border btn-sm me-2 px-3 text-dark text-decoration-none shadow-sm">
        //       <i className="fas fa-trash-alt"></i>
        //     </button>
        //     <button className="btn btn-link border btn-sm me-2 px-3 text-dark text-decoration-none shadow-sm">
        //       <i className="fas fa-arrow-up"></i>
        //     </button>
        //   </span>
        // </li>
      ))}
    </ul>
  );
}
