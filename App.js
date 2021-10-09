import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoListStore from "./components/TodoList";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoListStore />
        <TodoInput />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEAED",
  },
});
