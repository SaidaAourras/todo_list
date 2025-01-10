import React from "react";
import AddTodo from "./Component/AddTodo";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
