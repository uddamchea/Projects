import { TodoItem } from "./TodoItem"

export function TodoList( {todo, toggleTodo, deleteTodo}) {
    return(
    <ul className="list">
        {todo.length === 0 && "No Tasks"}
        {todo.map(todo => {
          return(
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )
        })}
      </ul>
    )
}