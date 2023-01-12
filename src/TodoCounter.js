import React from 'react'


function TodoCounter ({ completed, total}) {
  return (
    <h2 className='sm:text-sm'> Has completado {completed} de {total} TODOs </h2>
  )
}

export { TodoCounter };