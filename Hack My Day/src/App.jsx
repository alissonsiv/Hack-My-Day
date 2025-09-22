import { useState } from 'react';

import "./App.css";
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Adicionar sua primeira tarefa!",
      category: "Geral",
      isCompleted: false,
    }
  ]);

  return (
  <div className="app">
      <h1>Hack My Day</h1>

      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm />
  </div>
  )
}

export default App
