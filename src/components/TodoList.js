import React from 'react'
import Todo from './Todo'

/* se va a importar a App.js */

/* para una mejor lectura de los todo, se crea un array con los todo */

/* cada que se cree una funcion o en app que tenga que ver con funcionalidad, se debe de agregar tanto en el parametro TodoList como dentro del todo.map */

const TodoList = ({ todos, todoDelete, todoToogleComplete }) => {


  return (
    /* a un fragment no se le pueden asignar o agregar style.css */
    <div>
      <h1 className='text-right' style={{ textAlign: 'right' }}>I'm a to-do list</h1>
      {
        todos.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleComplete={todoToogleComplete}
          />
        ))
      }
    </div>
  )
}

export default TodoList