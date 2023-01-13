import React from 'react'

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";

import { TodoContext } from "../TodoContext/TodoContex";

function Wrapper() {
  return (
    <div className='flex flex-col px-14 py-10 relative min-h-screen'>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          isError,
          isLoading,
          todos,
          doneTodo,
        }) => (
          <React.Fragment>
            {isError && <p>Wait, hubo un error</p>}
            {isLoading && <p>Cargando</p>}
            {(!isLoading && !todos.length) && <p>Crea tu primer TODO</p>}
            <TodoList>

              {todos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  onCompleted={doneTodo}
                />
              ))}
            </TodoList>
          </React.Fragment>
        )
        }
      </TodoContext.Consumer>

      <CreateTodo />
    </div>
  )
}

export { Wrapper }