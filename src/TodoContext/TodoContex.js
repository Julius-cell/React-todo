import React from 'react';

import { useLocalStorage } from '../useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const { todos, saveTodos, isLoading, isError, totalTodos } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [completedTodos, setCompletedTodos] = React.useState(0);

  const doneTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text.target.value);
    let newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    newTodos = newTodos.filter(todo => !todo.completed);
    setCompletedTodos(completedTodos + 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      todos,
      doneTodo,
      isLoading,
      isError,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
