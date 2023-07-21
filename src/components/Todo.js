/* crear el componente todo => refce*/

import React from 'react'
/* desestructuracion de los todo */
/* vamos a extraer los todos que tenemos en TodoList.js => todo.title y todo.description para evitar agreagar props.todo.title y solamente agregar todo.title */
/* Esta desestructuracion se hace directamente dentro del argumeto del componente */

const Todo = ({ todo }) => {

  return (
    <div className='card mt-2'>
      <div className='card-body'>
        {/* text-right = alinea el texto a la derecha */}
        <h3 className='card-title' style={{ textAlign: 'right' }}>
          {/* de las propiedades todo.muestrame le tile */}
          {todo.title}
          <button className='btn btn-sm btn-outline-success' style={{ marginLeft: '10px' }}>
            Finish
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
          <button className='btn btn-sm btn-outline-primary' style={{ marginRight: '10px' }}>
            Edit
          </button>
          {/* btn-danger = boton de color rojo */}
          <button className='btn btn-sm btn-outline-danger'>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo


