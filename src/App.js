// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { Wrapper } from "./Wrapper";

import { useLocalStorage } from './useLocalStorage'
// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Cortar Pan', completed: false },
//   { text: 'Terminar curso intro a react', completed: false },
// ]

function App(props) {

  return (
    <Wrapper>
      <TodoCounter
        // total={totalTodos}
        // completed={completedTodos}
      />
      <TodoSearch
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />

      {/* {isError && <p>Wait, hubo un error</p>}
      {isLoading && <p>Cargando</p>}
      {(!isLoading && !todos.length) && <p>Crea tu primer TODO</p>} */}
      <TodoList
        // searchValue={searchValue}
      >

        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onCompleted={doneTodo}
          />
        ))}
      </TodoList>

      <CreateTodo />
    </Wrapper>
  );
}

export default App;
