import React from "react";
import AddTodo from "./Component/AddTodo";
import TodoList from "./Component/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {
  return (
    <div className="App container mt-5">
    <h1 className="text-center text-purple mb-4">Todo App</h1>
    <AddTodo />
    <TodoList />
  </div>
  );
}

export default App;
