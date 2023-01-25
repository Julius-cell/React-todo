import React from 'react'


function TodoCounter({ completedTodos, totalTodos }) {

  return (
    <h2 className='sm:text-sm'> Has completado {completedTodos} de {totalTodos} TODOs </h2>
  )
}

export { TodoCounter };