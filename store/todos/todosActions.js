import axios from "axios";
import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  PUSH_TODO_ACTION,
  TOGGLE_TODO_ACTION,
} from "./todoReducer";

// export const addTodoAction = (title) => ({
//   type: ADD_TODO_ACTION,
//   payload: { title },
// });
export const addTodoAction = (title) => async (dispatch) => {
  console.log(dispatch);
  try {
    const response = await axios.post(
      "https://jsonplaceholder.cypress.io/todos/",
      {
        title,
        completed: false,
      }
    );
    return dispatch({
      type: PUSH_TODO_ACTION,
      payload: response.data,
    });
  } catch (err) {
    return;
  }
};

export const deleteTodoAction = ({ id }) => ({
  type: DELETE_TODO_ACTION,
  payload: id,
});

export const toggleTodoAction = ({ id }) => ({
  type: TOGGLE_TODO_ACTION,
  payload: id,
});

export const pushTodoAction = (todo) => ({
  type: PUSH_TODO_ACTION,
  payload: todo,
});
