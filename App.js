import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Todo } from './components/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.todosWrapper}>
        <Text style={styles.title}>Todos list</Text>
        <View>
          <Todo title={'Todo 1'} key={1} />
          <Todo title={'Todo 2'} key={2} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  todosWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
