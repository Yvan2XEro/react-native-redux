import axios from "axios";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoListStore from "./components/TodoList";
import store from "./store";
import { addTodoAction, pushTodoAction } from "./store/todos/todosActions";

export default function App() {
  useEffect(async () => {
    for (let i = 1; i < 5; i++)
      await axios
        .get(`https://jsonplaceholder.cypress.io/todos/${i}`)
        .then((response) => {
          // response.data.forEach((item) => {
          //   const { id, title, completed } = item;
          //   store.dispatch(pushTodoAction({ id, title, completed }));
          // });
          const { id, title, completed } = response.data;
          store.dispatch(pushTodoAction({ id, title, completed }));
        });
  }, []);
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
