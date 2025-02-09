import { useState } from 'react'
import Add from './components/Add/Add'
import './App.css'
import InpBox from './components/InpBox/InpBox'

function App() {
  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')
 
 const changeValue = (e) => {
  setText(e.target.value)
 }
 const addTodo = () => {
  if (text.trim()) 
    {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id : Date.now(),
          title : text,
          isDone : false
        }
      ]
    })
    setText('')
  }
 }
 const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
 }
 const change = (id) => {
  setTodos(todos.map((el) => {
    if(el.id === id){
      return{
        ...el,
        isDone : !el.isDone
      }
    }else{
      return todo
    }
  }))
 }
 
  return (
    <div className='app'>
    <Add text = {text} changeValue = {changeValue} addTodo = {addTodo}/>
   <InpBox todos = {todos} change = {change} remove = {remove}/>
    </div>
  )
}

export default App
