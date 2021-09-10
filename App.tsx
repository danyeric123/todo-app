import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList,TouchableOpacity } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export interface Todo {
  text: string
  id:string
}

export default function App() {

  const [list, setList] = useState<Todo[]>([])

  const deleteItem = (id:string)=>{
    setList(prevList=>prevList.filter(item=>item.id!==id))
  }

  const addTodo = (newTodo:string)=>{
    const todoObject ={
      text: newTodo,
      id: Math.random().toString()
    }
    setList(prevList=>[todoObject,...prevList])
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <TodoForm addTodo={addTodo} />
      <FlatList
        data={list}
        renderItem={({item})=>(
          <TodoItem deleteItem={deleteItem} id={item.id} text={item.text} key={item.id} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  
});
