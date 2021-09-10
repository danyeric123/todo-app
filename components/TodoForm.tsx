import React, { useState } from 'react'
import { TextInput, View,StyleSheet, Button } from 'react-native'

interface FormProps{
  addTodo: (newTodo:string)=>void
}

const TodoForm : React.FC<FormProps> = ({addTodo}) => {

  const [input, setInput] = useState('')
  
  const handleSubmit = (input:string)=>{
    addTodo(input)
    setInput('')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Todo Item"
        value={input}
        onChangeText={val=>setInput(val)}
      />
      <View style={styles.button}>
        <Button title="Add" onPress={()=>handleSubmit(input)} color="white" />
      </View>
    </View>
  )
}

export default TodoForm

const styles = StyleSheet.create({
  input:{
    marginTop: 10,
    borderColor:'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
  button:{
    backgroundColor: 'blue',
    borderRadius:10,
    margin:10
  }
})
