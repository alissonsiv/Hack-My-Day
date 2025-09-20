import { use, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar capítulo 3 de Estruturas de Dados",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Limpar a sala e organizar os livros",
      category: "Casa",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Revisar exercícios de matemática",
      category: "Faculdade",
      isCompleted: false,
    }
  ]);

  return (
    <div className='app'>
      <h1>Hack My Day</h1>

      <div className='todo-list'>
        {todos.map((todo) => (
          <div className='todo'>
            <div className='content'>
              <p>{todo.text}</p>

              <p className='category'>({todo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default App
