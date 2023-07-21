/* recomendable utilizar los componentes de clase, ya que son mas funcionales */

/* para importar librerias desde el package.json, no se necesita agregar ./ */
/* para importar archivos que estan en la carpeta src, ahi si debemos agregar ./ */

import React from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


/* creaacion de funcin */

const App = () => {
  /* un componente, solamente puede retornar una unica etiqueta, para retornar mas de una etiqueta, debemos de retornar un contenedor padre. */
  return (
    /* return varios elementos: se utiliza un fragment, etiquetas abiertas, ya que podria danar nuestra maquetacion
    */
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList />
          {/* componentes */}
        </div>
        <div className="col-4">
          <TodoForm />
        </div>
      </div>
    </div>
  )
}

export default App