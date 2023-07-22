/* se puede utilizar el auto import de useState para que automaticamente nos lo importe en React,  */
import React, { useState } from 'react'

/* creacion de componente, no es mas que una funcion */
/* se va a importar a App.js */

const initalFormValues = {
  title: '',
  description: ''
}

const TodoForm = ({ todoAdd }) => {
  /* podemos user el snipet de useState para que automaticamente nos agrege el useState dentro del componente */
  /* los hooks solo pueden ser usados dentro del componente */

  const [formValues, setFormValues] = useState(initalFormValues)

  /* desestructurar los formValues */
  const { title, description } = formValues
  /* estado de error para title o description vacios */
  const [error, setError] = useState(null)
  /* estado en el cual digamos que se creo la tarea con exito */
  const [successMessage, setSuccessMessage] = useState(null)

  /* Funcion que maneje el cambio en el formulario */
  const handleInputChange = (e) => {

    const changeFormValues = {
      ...formValues,
      [e.target.name]: e.target.value
    }

    setFormValues(changeFormValues)
  }

  /* submit task */
  const handleSubmit = (e) => {
    e.preventDefault()

    /* validacion para los titulos vacios */
    if (title.trim() === '') {
      setError('Must enter title')
      return
    }

    /* validacion para tareas vacias */
    if (description.trim() === '') {
      setError('Must enter a description')
      return
    }

    /* funcion agregar nueva tarea, se crea primero en el App.js */
    todoAdd(formValues)
    /* limpiar formulario cuando se haya enviado una tarea */
    /* no se recomienda poner null, ya que no se convierte en un objeto con la propiedad title */
    /* lo mejor es enviarlo al valor inicial initialFormValues */
    setFormValues(initalFormValues)

    setSuccessMessage('Successfully added')

    /* setSuccessMessage va a aparecer por cierto tiempo y despues va a desaparecer */
    /* recibe dos argumentos (funcion a ejecutar pasado el tiempo en milisegundos, tiempo en milisegundos) */
    setTimeout(() => {
      setSuccessMessage(null)
    }, 2000)

    setError(null)
  }

  return (
    <div>

      <h1>New task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          className='form-control'
          value={title}
          name='title'
          onChange={handleInputChange}
        />

        <textarea
          placeholder='Description'
          className='form-control mt-2'
          value={description}
          name='description'
          onChange={handleInputChange}
        ></textarea>

        <button
          /* in the new bootstrap btn-block(to use a full-size button) is not working now we use w-100 (width at 100%) */
          className='btn btn-primary w-100 mt-2'>
          Add task
        </button>

      </form>
      {
        /* si error tiene algun valor me muestra la expresion, sino tiene nada, no muestra nada */
        error &&
        (
          <div className='alert alert-danger mt-2'>
            {error}
          </div>
        )

      }

      {
        /* muestra un mensaje de exito cuando se haya agregado una nueva tarea exitosamente */
        successMessage &&
        (
          <div className='alert alert-success mt-2'>
            {successMessage}
          </div>
        )
      }

    </div>
  )
}

export default TodoForm