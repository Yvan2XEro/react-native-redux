import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodoAction } from "../store/todos/todosActions";
import { allTodos } from "../store/todos/todoSelectors";
import Todo from "./Todo";

function TodoList({ todos }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.todosWrapper}>
      <Text style={styles.title}>Todos list</Text>
      <View style={styles.items}>
        {todos.map((todo) => (
          <TouchableOpacity
            key={todo.id}
            // onPress={() => dispatch(deleteTodoAction(todo.id))}
          >
            <Todo data={todo} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default function TodoListStore() {
  const todos = useSelector(allTodos);
  return <TodoList todos={todos} />;
}

const styles = StyleSheet.create({
  todosWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginBottom: 20,
  },
});
