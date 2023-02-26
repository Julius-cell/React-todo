import React from 'react';

import { useLocalStorage } from './useLocalStorage'

function useTodos() {
  const {
    todos,
    saveTodos,
    isLoading,
    isError,
    setTotalTodos,
    totalTodos,
    completedTodos,
    setCompletedTodos
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const addTodo = (text) => {
    const newTodos = [...todos];
    const id = newTodos.length + 1;
    newTodos.push({
      text,
      completed: false,
      id
    });
    setTotalTodos(totalTodos + 1);
    saveTodos(newTodos);
  }

  const doneTodo = (item) => {
    const todoIndex = todos.findIndex(todo => todo.id === +item.target.value);
    let newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    setCompletedTodos(completedTodos + 1);
  }

  return {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    todos,
    addTodo,
    doneTodo,
    isLoading,
    isError,
  }
}

export { useTodos };
