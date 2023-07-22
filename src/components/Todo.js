/* crear el componente todo => refce*/

import React from 'react'
/* desestructuracion de los todo */
/* vamos a extraer los todos que tenemos en TodoList.js => todo.title y todo.description para evitar agreagar props.todo.title y solamente agregar todo.title */
/* Esta desestructuracion se hace directamente dentro del argumeto del componente */
/* cada que se cree una funcion o en app que tenga que ver con funcionalidad, se debe de agregar tanto en el parametro Todo como dentro del button al que la funcionalidad este haciendo referencia */

const Todo = ({ todo, todoDelete, todoToogleComplete, setTodoEdit }) => {

  return (
    <div className='card mt-2'>
      <div className='card-body'>
        {/* text-right = alinea el texto a la derecha */}
        <h3 className='card-title' style={{ textAlign: 'right' }}>
          {/* de las propiedades todo.muestrame le tile */}
          {todo.title}

          <button
            /* in new bootstrap ml (margin- left) or mr(margin-right) are not working now it's used ms(margin-start) for left and me (margin end) for right */
            onClick={() => todoToogleComplete(todo.id)}
            className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ms-2`}
          >
            {todo.completed ? 'Finished' : 'Finishing'}
          </button>

        </h3>
        <p className='card-text' style={{ textAlign: 'right' }}>
          {/* estamos usando algo similar a la interpolacion */}
          {todo.description}
        </p>
        <hr />
        <div className='d-flex justify-content-end'>

          {/* btn-success = boton azul */}
          {/* mr-2 = margen a la derecha de 2 */}
          <button
            /* en el evento onClick se va a ejecutar la funcion editar, como aargumento le pasamos el todo, que son las tareas y se agrega como argumento en las props osea en const Todo */
            onClick={() => setTodoEdit(todo)}
            className='btn btn-sm btn-outline-primary me-2'>
            Edit
          </button>
          {/* btn-danger = boton de color rojo */}
          <button
            onClick={() => todoDelete(todo.id)}
            className='btn btn-sm btn-outline-danger'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo


