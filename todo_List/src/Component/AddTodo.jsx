import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddTodo.css"; // Custom CSS file

const AddTodo = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addTodo({ id: Date.now(), name, status: "Pending" }));
      setName("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg todo-card">
        <div className="card-body">
          <h3 className="card-title text-center text-purple">Add a Task</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-purple"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add a new task"
              />
              <button type="submit" className="btn btn-purple ms-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
