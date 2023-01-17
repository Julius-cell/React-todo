import React from 'react'

function useLocalStorage(itemName, initialValue) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);
  const [totalTodos, setTotalTodos] = React.useState(0);
  const [completedTodos, setCompletedTodos] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setCompletedTodos(parsedItem.filter(item => item.completed).length);
        setTotalTodos(parsedItem.length);
        setItem(parsedItem);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }

    }, 2000)
  }, []);


  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (error) {
      setIsError(true);
    }
  }

  return {
    todos: item,
    saveTodos: saveItem,
    isLoading,
    isError,
    setTotalTodos,
    totalTodos,
    completedTodos,
    setCompletedTodos
  }
}

export { useLocalStorage };