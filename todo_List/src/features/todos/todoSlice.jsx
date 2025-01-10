import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "training", status: "Done" },
  { id: 2, name: "praying", status: "Done" },
  { id: 3, name: "reading", status: "Pending" },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = todo.status === "Done" ? "Pending" : "Done";
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodoStatus, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
