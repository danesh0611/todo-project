import './App.css'
import React, { useState } from 'react'
import Input from './components/Input'
import Todocontainer from './components/todocontainer'

function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])

  function writeTodo(e) {
    setInputVal(e.target.value)
  }

  function addTodo() {
    if (inputVal !== '') {
      setTodos(prevTodos => [...prevTodos, inputVal])
      setInputVal('')
    }
  }

  function deleteTodo(todoIndex) {
    setTodos(todos.filter((_, index) => index !== todoIndex))
  }

  return (
    <main>
      <h1>To Do List</h1>
      <Input inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <Todocontainer todos={todos} deleteTodo={deleteTodo} />
    </main>
  )
}

export default App