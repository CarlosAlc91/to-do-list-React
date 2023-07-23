import React from 'react'
import Todo from './Todo'

/* se va a importar a App.js */

/* para una mejor lectura de los todo, se crea un array con los todo */

/* cada que se cree una funcion o en app que tenga que ver con funcionalidad, se debe de agregar tanto en el parametro TodoList como dentro del todo.map */

const TodoList = ({ todos, todoDelete, todoToogleComplete, setTodoEdit }) => {


  return (
    /* a un fragment no se le pueden asignar o agregar style.css */
    <div>
      {/* en bootstrap 5, text-left === text-start, text-right === text-start*/}
      <h2 className='text-end display-4'>I'm a to-do list</h2>

      {/* carga condicional para mostrar un mensaje cuando no se tengan tareas agregadas */}
      {/* si el arreglo todos.length esta vacio === 0 */}
      {
        todos.length === 0
          /* muestras este mensaje */
          ? (
            <div className='alert alert-primary'>
              No tasks, please add a new task!!📝
            </div>
          )
          /* en caso contrario itera sobre todos los todos y muestrame las tareas que haya */
          : (
            todos.map(todo => (
              <Todo
                todo={todo}
                key={todo.id}
                todoDelete={todoDelete}
                todoToogleComplete={todoToogleComplete}
                setTodoEdit={setTodoEdit}
              />
            ))
          )
      }

    </div>
  )
}

export default TodoList