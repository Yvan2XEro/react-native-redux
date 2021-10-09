export const allTodos = ({ todos }) => todos;

export const completeTodos = ({ todos }) =>
  todos.filter((todo) => todo.completed);
