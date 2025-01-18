import React from 'react'
import Todo from './Todo'

function Todocontainer({ todos , deleteTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default Todocontainer