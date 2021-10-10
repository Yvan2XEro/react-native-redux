export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const TOGGLE_TODO_ACTION = "TOGGLE_TODO_ACTION";
export const PUSH_TODO_ACTION = "PUSH_TODO_ACTION";

export function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [
        ...state,
        { completed: false, id: state.length, ...action.payload },
      ];

    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id != action.payload);
    case TOGGLE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, completed: !todo.completed };
        return todo;
      });
    case PUSH_TODO_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
}
