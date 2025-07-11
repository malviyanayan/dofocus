export default function MyTodos({ todos,markAsCompleted, completedList, deleteFromToDoList }) {
  const noTodosMessage = (
    <div className="text-center mt-3 mb-2 fs-6 fw-medium text-danger">
      No Todos Available
    </div>
  );

  return (
    <ul className="list-group">
      {todos.length === 0 && completedList.length === 0 ? noTodosMessage : null}

      {todos.map((item, index) => (
        <MyTodo key={index} item={item} markAsCompleted={markAsCompleted} deleteFromToDoList={deleteFromToDoList} />
      ))}
    </ul>
  );
}

function MyTodo({ item, markAsCompleted, deleteFromToDoList }) {
  return (
    <li key={item.id} className="list-group-item mt-1 border d-flex justify-content-between align-items-center mb-2 border-secondary-subtle rounded shadow-sm">
      <span>
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          id={`todoCheckbox-${item.id}`}
          onChange={() => markAsCompleted(item)}
        />
        <label className="form-check-label ms-2" htmlFor={`todoCheckbox-${item.id}`}>
          {item.item}
        </label>
      </span>

      <button className="btn btn-link border btn-sm me-2 px-3 text-dark text-decoration-none shadow-sm" onClick={() => {deleteFromToDoList(item)}}>
        <i className="fas fa-trash-alt text-danger"></i>
      </button>
    </li>



    // <li className="list-group-item d-flex justify-content-between align-items-centerm mb-2 border border-secondary-subtle rounded shadow-sm">
    //   <span>{item}</span>
    //   <span>
    //     <button className="btn btn-link border btn-sm me-2 px-3 text-dark text-decoration-none shadow-sm">
    //       <i className="fas fa-trash-alt"></i>
    //     </button>
    //     <button className="btn btn-link border btn-sm me-2 px-3 text-dark text-decoration-none shadow-sm">
    //       <i className="fas fa-check"></i>
    //     </button>
    //   </span>
    // </li>
  );
}
