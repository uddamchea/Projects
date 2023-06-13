import { useEffect } from "react"
import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./style.css"
import { TodoList } from "./TodoList"

export default function App() {
  const [todo, setTodo] = useState(() => {
    const localVal = localStorage.getItem("ITEMS")
    if (localVal === null) return []
    return JSON.parse(localVal)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo))
  }, [todo])

  function addTodo(title) {
    setTodo( (currentTodo) => {
      return [...currentTodo, {id: crypto.randomUUID(), title, completed: false}]
    })
  }
  

  function toggleTodo(id, completed) {
    setTodo(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return(
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header"> ToDo List </h1>
      <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

