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
      <View style={styles.button}>
        <Button title="delete" color="white" onPress={()=>deleteItem(id)} />
      </View>
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  item:{
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
  },
  button:{
    backgroundColor: "red",
    borderRadius: 10
  }
})