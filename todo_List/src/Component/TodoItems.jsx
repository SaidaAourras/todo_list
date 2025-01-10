import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, deleteTodo } from "../features/todos/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoItem.css"; // Custom CSS file

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between align-items-center todo-item border-purple p-3 mb-3">
      <span className={`todo-name ${todo.status === "Done" ? "text-decoration-line-through" : ""}`}>
        {todo.name}
      </span>
      <div>
        <button
          className="btn btn-purple me-2"
          onClick={() => dispatch(toggleTodoStatus(todo.id))}
        >
          {todo.status === "Pending" ? "Done" : "Undo"}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
