/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform, KeyboardAvoidingView} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todosStorage from './storages/todosStoarge';

function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const rawTodos = await AsyncStorage.getItem('todos');
  //       const savedTodos = JSON.parse(rawTodos);
  //       setTodos(savedTodos);
  //       console.log('안녕 여기는 불러오는 곳이야!');
  //     } catch (e) {
  //       console.log('Failed to load todos');
  //     }
  //   }
  //   load();
  // }, []);

  // useEffect(() => {
  //   console.log('after : ');
  //   console.log(todos);
  //   return () => {
  //     console.log('todos update before : ');
  //     console.log(todos);
  //   };
  // }, []);

  // useEffect(() => {
  //   async function save() {
  //     try {
  //       await AsyncStorage.setItem('todos', JSON.stringify(todos));
  //       console.log('set 실행됨');
  //     } catch (e) {
  //       console.log('Failed to save todos');
  //     }
  //   }
  //   save();
  //   // console.log('변화되서 찍히는 todos : ' ,todos);
  // }, [todos]);

  // useEffect(() => {
  //   todosStorage.get().then(setTodos).catch(console.error);
  // }, []);

  // useEffect(() => {
  //   todosStorage.set(todos).catch(console.error);
  // }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: 'undefined'})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
