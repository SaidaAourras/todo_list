import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoList.css"; // Custom CSS file

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg todo-card">
        <div className="card-body">
          <h3 className="card-title text-center text-purple">Your Tasks</h3>
          <ul className="list-group mt-4">
            {todos.map((todo) => (
              <li key={todo.id} className="list-group-item border-purple mb-2">
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
