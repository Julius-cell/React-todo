import React from 'react';
import { useLocalStorage } from '../useLocalStorage'

const TodoCounter = React.createContext();

function TodoProvider(props) {
  // const { todos, saveTodos, isLoading, isError } = useLocalStorage('TODOS_V1', []);

  // const [searchValue, setSearchValue] = React.useState('');
  // const [completedTodos, setCompletedTodos] = React.useState(0);
  // const [totalTodos, setTotalTodos] = React.useState(todos.length);


  // const doneTodo = (text) => {
  //   const todoIndex = todos.findIndex(todo => todo.text === text.target.value);
  //   let newTodos = [...todos];
  //   newTodos[todoIndex].completed = true;
  //   newTodos = newTodos.filter(todo => !todo.completed);
  //   setCompletedTodos(completedTodos + 1);
  //   saveTodos(newTodos);
  // }

  return (
    <TodoContext.Provider value={{

    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

<TodoContext.Consumer></TodoContext.Consumer>