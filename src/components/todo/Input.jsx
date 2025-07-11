import { useRef } from "react";

export default function Input({addTodo}) {
  const inputItem = useRef(null);

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 py-1 pt-3 border-bottom border-danger-subtle pb-3 shodow-sm bg-dark-subtle">
      <input
        type="text"
        className="form-control shadow-sm border border-dark-subtle"
        style={{ maxWidth: "400px", padding: "8px 16px", borderRadius: "10px" }}
        placeholder="Add New Todo Item..."
        ref={inputItem}
      />
      
      <button className="btn btn-success d-flex align-items-center gap-2 py-2 shadow border border-dark-subtle rounded" onClick={() => {
        const item = inputItem.current.value.trim();
        if (item) {
          addTodo(item);
          inputItem.current.value = "";
        }
      }}>
        <i className="fas fa-plus"></i>
        Add
      </button>
    </div>
  );
}
