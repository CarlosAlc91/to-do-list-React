/* se puede utilizar el auto import de useState para que automaticamente nos lo importe en React,  */
/* Hook de efecto => useEffect => perte que el estado cambie por algun valor se llene la informacion con la nueva informacion que estamos recibiendo y es importado de react, lo podemos utilizar debajo de los estados */
import React, { useState, useEffect } from 'react'

/* creacion de componente, no es mas que una funcion */
/* se va a importar a App.js */

const initalFormValues = {
  title: '',
  description: ''
}

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  /* podemos user el snipet de useState para que automaticamente nos agrege el useState dentro del componente */
  /* los hooks solo pueden ser usados dentro del componente */

  const [formValues, setFormValues] = useState(initalFormValues)

  /* desestructurar los formValues */
  const { title, description } = formValues
  /* estado de error para title o description vacios */
  const [error, setError] = useState(null)
  /* estado en el cual digamos que se creo la tarea con exito */
  const [successMessage, setSuccessMessage] = useState(null)

  /* hook useEffect */
  /* recibe dos argumentos ((arrow function), [arreglo de dependencias el cual debe de ser agregado como argumento en const TodoForm()]) */
  useEffect(() => {

    /* cuando cambie el todoEdit, los formValues tomen lo que tiene el todoEdit, para evitar errores se debe decir que esta funcion soklo se ejecute si es diferente de null  */

    if (todoEdit) {

      setFormValues(todoEdit)
      /* cuando sean null manda a los formValues el valor inicial */
    } else {
      setFormValues(initalFormValues)
      /* ahora si estamos editando algun todo y lo eliminamos, el formulario se limpia */
    }

  }, [todoEdit])


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
      setError('Please, enter a title')
      return
    }

    /* validacion para tareas vacias */
    if (description.trim() === '') {
      setError('Please, enter a description')
      return
    }

    /* esta condicional es para que al momento de editar una tarea, la tarea no se agregue nuevamente sino que solamente se actualice dentro de la misma tarea */
    /* una vez realizado este condicional, tenemos que eliminar todoAdd de las funciones */
    if (todoEdit) {
      /* update task */
      todoUpdate(formValues)
      setSuccessMessage('Successfully updated')

    } else {
      /* add task */
      todoAdd(formValues)
      setSuccessMessage('Successfully added')
      /* limpiar formulario cuando se haya enviado una tarea */
      /* no se recomienda poner null, ya que no se convierte en un objeto con la propiedad title */
      /* lo mejor es enviarlo al valor inicial initialFormValues */
      setFormValues(initalFormValues)
    }

    /* funcion agregar nueva tarea, se crea primero en el App.js */
    /* todoAdd(formValues) */



    /* setSuccessMessage va a aparecer por cierto tiempo y despues va a desaparecer */
    /* recibe dos argumentos (funcion a ejecutar pasado el tiempo en milisegundos, tiempo en milisegundos) */
    setTimeout(() => {
      setSuccessMessage(null)
    }, 2000)

    setError(null)
  }

  return (
    <div>

      {/* si todoEdit ? no es null edit new task : de lo contrario quiere decir que esta en null por lo tanto new task */}
      <h2 className='text-center display-3'>{todoEdit ? 'Edit task' : 'New task'}</h2>

      {/* este boton solo se mostrara cuando estemos en modo de edicion */}
      {/* para salir del modo de edicion debemos regresar el botn a su estado null, por lo que en App.js se necesita enviar la funcion de actualizar al formulario setTodoEdit dentro del return en TodoForm se agrega setTodoEdit={setTodoEdit} */}
      {
        todoEdit &&
        <button
          /* siempre se debe de crear un arrow function para que la funcion sea ejecutada hasta que reciba el click en el boton Discard */
          /* el boton en su evento onClick va a llamar a la funcion setTodoEdit y lo va a regresar a su estado inicial null */
          onClick={() => setTodoEdit(null)}
          className='btn btn-sm btn-warning mb-2 w-100 text-secondary text-uppercase fs-4'>
          Done editing!👍🏽
        </button>
      }

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
          className='btn btn-primary w-100 mt-2 fs-3 '>
          {/* todoEdit no es null ? muestrame update task : de lo contrario quiere decir qie esta en null muestrame add task */}
          {/* cuando hacemos el update de las tareas se agrega como si fuera una nueva tarea en vez de solo actulizarse en la mmisma tarea por ende se necesita hacer un cambio en el submit todoAdd */}
          {todoEdit ? 'Update task ✅' : 'Add task'}
        </button>

      </form>
      {
        /* si error tiene algun valor me muestra la expresion, sino tiene nada, no muestra nada */
        error &&
        (
          <div className='alert alert-danger mt-2 text-center fs-5'>
            {error}
          </div>
        )

      }

      {
        /* muestra un mensaje de exito cuando se haya agregado una nueva tarea exitosamente */
        successMessage &&
        (
          <div className='alert alert-success mt-2 text-center fs-5'>
            {successMessage}
          </div>
        )
      }

    </div >
  )
}

export default TodoForm