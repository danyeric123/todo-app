import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';
import { Todo } from '../App';

interface ItemProps{
  text: string
  id: string
  deleteItem: (key:string)=>void
}

const TodoItem : React.FC<ItemProps> = ({text,id,deleteItem}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>{text}</Text>
      <MaterialIcons size={20} onPress={()=>deleteItem(id)} name="delete" />
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  item:{
    flex: 1,
    flexDirection: 'row',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
  }
})