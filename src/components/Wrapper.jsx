import React from 'react'

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { TodoLoading } from './TodoLoading'

import { TodoContext } from "../TodoContext/TodoContex";

function Wrapper() {
  const {
    isError,
    isLoading,
    todos,
    doneTodo,
  } = React.useContext(TodoContext);

  const todosIncompleted = todos.filter(todo => !todo.completed);

  return (
    <div className='flex flex-col px-14 py-10 relative min-h-screen'>
      <TodoCounter />
      <TodoSearch />

      {isError && <p>Wait, hubo un error</p>}
      {isLoading && <TodoLoading/>}
      {(!isLoading && !todosIncompleted.length) && <p>Crea tu primer TODO</p>}
      <TodoList>

        {todosIncompleted.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onCompleted={doneTodo}
          />
        ))}
      </TodoList>

      <CreateTodo />
    </div>
  )
}

export { Wrapper }