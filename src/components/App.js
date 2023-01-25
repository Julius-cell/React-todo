import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { TodoLoading } from './TodoLoading'

import { useTodos } from "../customHooks/useTodos";
import { TodoHeader } from './TodoHeader';


function App() {
  const {
    isError,
    isLoading,
    todos,
    doneTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos();

  const todosIncompleted = todos.filter(todo => !todo.completed);

  return (
    <div className='flex flex-col px-14 py-10 relative min-h-screen'>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      {isError && <p>Wait, hubo un error</p>}
      {isLoading && <TodoLoading />}
      {(!isLoading && !todosIncompleted.length) && <p>Crea tu primer TODO</p>}


      <TodoList searchValue={searchValue}>

        {todosIncompleted.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onCompleted={doneTodo}
          />
        ))}
      </TodoList>

      <CreateTodo addTodo={addTodo}/>
    </div>
  )
}

export default App;
