import React from "react";
import {
  StyleSheet,
  CheckBox,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  deleteTodoAction,
  toggleTodoAction,
} from "../store/todos/todosActions";

const Todo = ({ data }) => {
  const { title, completed, id, onToggle } = data;
  const dispatch = useDispatch();
  return (
    <View style={styles.todoItem}>
      <Text style={styles.text}>{title}</Text>
      <CheckBox
        onValueChange={() => dispatch(toggleTodoAction({ id }))}
        value={completed}
        style={styles.circular}
      />
      <TouchableOpacity
        onPress={() => dispatch(deleteTodoAction({ id }))}
        style={styles.btnSquare}
      >
        &times;
      </TouchableOpacity>
    </View>
  );
};
export default Todo;
const styles = StyleSheet.create({
  deleteBtn: {
    display: "inline-block",
    color: "#FFF",
  },
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
  btnSquare: {
    textAlign: "center",
    color: "#FFF",
    width: 24,
    height: 24,
    backgroundColor: "red",
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
