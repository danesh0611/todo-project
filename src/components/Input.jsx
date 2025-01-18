import React from 'react'
import "../App.css"

function Input({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="todo-container">
      <input type="text" value={inputVal} onChange={writeTodo} />
      <button onClick={addTodo}>+</button>
    </div>
  )
}

export default Input