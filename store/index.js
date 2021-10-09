import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todos/todoReducer";

const store = createStore(
  combineReducers({
    todos: todoReducer,
    filter: null,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
