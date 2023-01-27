import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { TodoLoading } from './TodoLoading'

import { useTodos } from "../customHooks/useTodos";
import { TodoHeader } from './TodoHeader';
import { TodoError } from "./TodoError";
import { EmptyTodos } from "./EmptyTodos";


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


  return (
    <div className='flex flex-col px-14 py-10 relative min-h-screen'>
      <TodoHeader isLoading={isLoading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        isError={isError}
        isLoading={isLoading}
        todos={todos}
        searchValue={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onCompleted={doneTodo}
          />
        )}
      >
        {/* {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onCompleted={doneTodo}
          />
        ))} */}
      </TodoList>
      <CreateTodo addTodo={addTodo} />
    </div>
  )
}

export default App;
