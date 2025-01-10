import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, deleteTodo } from "../features/todos/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{todo.name}</span>
      <span>
        <button onClick={() => dispatch(toggleTodoStatus(todo.id))}>
          {todo.status}
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </span>
    </div>
  );
};

export default TodoItem;
