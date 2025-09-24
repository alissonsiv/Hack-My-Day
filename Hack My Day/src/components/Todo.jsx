import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className='content'>
        <p>{todo.text}</p>
        <small className='category'>({todo.category})</small>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Desmarcar" : "Completar"}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  )
}


export default Todo;