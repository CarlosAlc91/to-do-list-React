/* recomendable utilizar los componentes de clase, ya que son mas funcionales */

/* para importar librerias desde el package.json, no se necesita agregar ./ */
/* para importar archivos que estan en la carpeta src, ahi si debemos agregar ./ */

import React, { useEffect, useState } from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


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


/* creaacion de funciones para hacer cambios a nuestra app */
/* cada que se cree una funcion o en app que tenga que ver con funcionalidad, se debe de agregar en el return de TodoList dentro de App, de lo contrario la funcion no esta siendo llamda */

const localTodos = JSON.parse(localStorage.getItem('todos'))

const App = () => {
  /* un componente, solamente puede retornar una unica etiqueta, para retornar mas de una etiqueta, debemos de retornar un contenedor padre. */

  /* desestructuracion del array initialTodos*/
  /* const [posicion0 asignalo a una variable todos, posicion1 asignalo a una variable setTodos] = useState(initialTodos aray) */
  const [todos, setTodos] = useState(localTodos || initialTodos)

  /* creacion de useState para editar una tarea */
  const [todoEdit, setTodoEdit] = useState(null)

  /* persistencia en el localStorage */
  /* creacion de un nuevo efecto */
  /* (arrow function, [arreglo de dependencias]) */
  useEffect(() => {

    /* cada vez que se actualice el estado de los todos */
    localStorage.setItem('todos', JSON.stringify(todos))

    /* [cada que los todos sean diferentes se grabe en el localStorage un valor actualizado de los todos] */
  }, [todos])

  /* creacion de funcion que elimina un TO-DO */
  const todoDelete = (todoId) => {

    /* antes de hacer la eliminacion sse hara una consulta */

    /* si el todoEdit es diferente de null no se hace el condicional pero si es null se hace la comparacion */
    if (todoEdit && todoId === todoEdit.id) {
      /* los formValues no se actuallizan por defecto, los efectos se cambian en todoForm */
      /* si la condicion se cumple se envia el setTodoEdit a null para que salga del formulario */
      setTodoEdit(null)
    }


    const changedTodos = todos.filter(todo => todo.id !== todoId)

    setTodos(changedTodos)
  }

  /* funcion que da por terminada una tarea */
  const todoToogleComplete = (todoId) => {

    /*  const changedTodos = (todoId) => {
 
       const changedTodos = todos.map(todo => {
         const todoEdit = {
           ...todo,
           completed: !todo.completed
         }
 
         if (todo.id === todoId) {
           return todoEdit
         } else {
           return todo
         }
 
       })
 
     } */


    /* const changedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo) */

    const changedTodos = todos.map(todo => (
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    ))

    setTodos(changedTodos)

  }

  /* funcion agregar tarea */
  /* la funcion se agrega en el return en TodoForm, ya que estamos trabajando en TodoForm.js  */
  const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }

    const changedTodos = [
      /* si agregamos el newTodo arriba de todo, las nuevas tareas se van agregando una arriba de otra. */
      newTodo,
      ...todos,
    ]

    setTodos(changedTodos)
  }

  /* funcion para edit o actualizar */
  const todoUpdate = (todoEdit) => {

    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id
        ? todoEdit
        : todo
    ))

    setTodos(changedTodos)
  }

  return (
    /* return varios elementos: se utiliza un fragment, etiquetas abiertas, ya que podria danar nuestra maquetacion
    */
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleComplete={todoToogleComplete}
            setTodoEdit={setTodoEdit}
          />
          {/* componentes */}
        </div>
        <div className="col-4">
          <TodoForm
            /* se agrega tanto en todo list como en todoForm para que pueda ser renderizado */
            todoEdit={todoEdit}
            todoAdd={todoAdd}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default App