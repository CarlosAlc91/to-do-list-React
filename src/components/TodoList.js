import React, { useState } from 'react'
import Todo from './Todo'

/* se va a importar a App.js */

/* para una mejor lectura de los todo, se crea un array con los todo */

const initialTodos = [
  {
    id: 1,
    title: 'TO-DO #1',
    description: 'TO-DO #1 description',
    completed: false
  },

  {
    id: 2,
    title: 'TO-DO #2',
    description: 'TO-DO #2 description',
    completed: true
  }
]

const TodoList = () => {
  /* desestructuracion del array initialTodos*/
  /* const [posicion0 asignalo a una variable todos, posicion1 asignalo a una variable setTodos] = useState(initialTodos aray) */
  const [todos, setTodos] = useState(initialTodos)

  return (
    /* a un fragment no se le pueden asignar o agregar style.css */
    <div>
      <h1 className='text-right' style={{ textAlign: 'right' }}>I'm a to-do list</h1>
      {
        todos.map(todo => <Todo todo={todo} key={todo.id} />)
      }
    </div>
  )
}

export default TodoList