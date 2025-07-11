import { useState } from "react";
import CompletedTodo from "./todo/CompletedTodo";
import Input from "./todo/Input";
import MyTodos from "./todo/MyTodos";

export default function ToDos() {

  // [{id : 1 , item : 'First'}, {id : 2 , item : 'Second'}, {id : 3 , item : 'Third'}, {id : 4 , item : 'Fourth'}
  // {id : 1 , item : 'First Completed'}, {id : 2 , item : 'Second Completed'}, {id : 3 , item : 'Third Completed'}, {id : 4 , item : 'Fourth Completed'}

  const [todoList, addTodoList] = useState([]);
  const [completedList, addCompletedList] = useState([]);

  function addTodo(addTodo){
    addTodoList([{id : Date.now(), item : addTodo}, ...todoList]);
  }

  function markAsCompleted(item) {
    addCompletedList([item, ...completedList]);
    addTodoList(todoList.filter(todo => todo.id !== item.id));
  }

  function markAsUncompleted(item) {
    addTodoList([...todoList, item]);
    addCompletedList(completedList.filter(todo => todo.id !== item.id));
  }

  function deleteFromToDoList(item) {
    // alert("Deleting from todo list: " + item.item);
    addTodoList(todoList.filter(todo => todo.id !== item.id));
  }

  function deleteFromCompletedList(item) {
    addCompletedList(completedList.filter(todo => todo.id !== item.id));
  }

  return (
    <div
      className="m-0 p-0 border border-danger"
      style={{ height: "85vh", width: "100%" }}
    >
      <Input addTodo={addTodo} />

      <div
        className="overflow-y-scroll no-scrollbar p-3 text-justify"
        style={{ height: "86%" }}
      >

        {/* uncompleted todos */}
        <MyTodos todos={todoList} markAsCompleted={markAsCompleted} completedList={completedList} deleteFromToDoList={deleteFromToDoList} />

        {/* completed todos */}
        <CompletedTodo completedTodos={completedList} markAsUncompleted={markAsUncompleted} deleteFromCompletedList={deleteFromCompletedList} />


      </div>

    </div>
  );
}
