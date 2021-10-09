const todos = [
  {
    id: 0,
    title: "Todo 1",
    completed: true,
  },
  {
    id: 1,
    title: "Todo 2",
    completed: true,
  },
  {
    id: 2,
    title: "Todo 3",
    completed: true,
  },
];

export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const TOGGLE_TODO_ACTION = "TOGGLE_TODO_ACTION";

export function todoReducer(state = todos, action) {
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
    default:
      return state;
  }
}
