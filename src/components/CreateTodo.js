import React, { useState } from 'react'

function CreateTodo({ addTodo }) {

  const [fullName, setFullName] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo(event.target.value);
      setFullName('');
      // TODO: Sumar uno al total de todos
    }
  }

  return (
    <div className="flex flex-auto self-center items-end mt-1 rounded-md shadow-sm">
      <input
        type="text"
        name="todo"
        id="todo"
        className="block w-full rounded-md border-gray-300 pl-3 pr-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Sacar a pasear al perro"
        onKeyDown={handleKeyDown}
        onChange={event => setFullName(event.target.value)}
        value={fullName}
      />
    </div>
  )
}

export { CreateTodo };