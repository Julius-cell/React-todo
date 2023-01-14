import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContex';


function TodoCounter() {
  const { completedTodos } = useContext(TodoContext);

  return (
    <h2 className='sm:text-sm'> Has completado {completedTodos} de # TODOs </h2>
  )
}

export { TodoCounter };