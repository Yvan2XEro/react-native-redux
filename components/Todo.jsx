import React from "react";
import { StyleSheet, CheckBox, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { toggleTodoAction } from "../store/todos/todosActions";

const Todo = ({ data }) => {
  const { title, completed, id, onToggle } = data;
  const dispatch = useDispatch();
  return (
    <View style={styles.todoItem}>
      <View style={styles.square}></View>
      <Text style={styles.text}>{title}</Text>
      <CheckBox
        onValueChange={() => dispatch(toggleTodoAction({ id }))}
        value={completed}
        style={styles.circular}
      />
    </View>
  );
};
export default Todo;
const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    opacity: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text: {
    maxWidth: 80,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#558CF6",
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  circular: {
    width: 22,
    height: 22,
    borderColor: "#558CF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
