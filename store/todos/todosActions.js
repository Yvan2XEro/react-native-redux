import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  TOGGLE_TODO_ACTION,
} from "./todoReducer";

export const addTodoAction = (title) => ({
  type: ADD_TODO_ACTION,
  payload: { title },
});

export const deleteTodoAction = ({ id }) => ({
  type: DELETE_TODO_ACTION,
  payload: id,
});

export const toggleTodoAction = ({ id }) => ({
  type: TOGGLE_TODO_ACTION,
  payload: id,
});
