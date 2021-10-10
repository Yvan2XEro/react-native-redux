import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./todos/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    todos: todoReducer,
    filter: null,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
