/* recomendable utilizar los componentes de clase, ya que son mas funcionales */

/* para importar librerias desde el package.json, no se necesita agregar ./ */
/* para importar archivos que estan en la carpeta src, ahi si debemos agregar ./ */

import React, { useState } from "react"
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

const App = () => {
  /* un componente, solamente puede retornar una unica etiqueta, para retornar mas de una etiqueta, debemos de retornar un contenedor padre. */

  /* desestructuracion del array initialTodos*/
  /* const [posicion0 asignalo a una variable todos, posicion1 asignalo a una variable setTodos] = useState(initialTodos aray) */
  const [todos, setTodos] = useState(initialTodos)

  /* creacion de funcion que elimina un TO-DO */
  const todoDelete = (todoId) => {

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
          />
          {/* componentes */}
        </div>
        <div className="col-4">
          <TodoForm
            todoAdd={todoAdd}
          />
        </div>
      </div>
    </div>
  )
}

export default App