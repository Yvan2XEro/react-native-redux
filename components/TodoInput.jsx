import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todos/todosActions";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = async () => {
    await dispatch(addTodoAction(todo));
    setTodo("");
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      styles={styles.inputTodoWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={todo}
        onChangeText={(text) => {
          setTodo(text);
        }}
        onSubmitEditing={() => {
          handleAddTodo();
        }}
      />
      <TouchableOpacity
        onPress={() => {
          handleAddTodo();
        }}
      >
        <View style={styles.addBtnWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputTodoWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 255,
  },
  addBtnWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
  },
  addText: {},
});
