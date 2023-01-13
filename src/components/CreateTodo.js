import React from 'react'

function CreateTodo() {
  return (
    <div className="flex flex-auto self-center items-end mt-1 rounded-md shadow-sm">
      <input
        type="text"
        name="todo"
        id="todo"
        className="block w-full rounded-md border-gray-300 pl-3 pr-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Sacar a pasear al perro"
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    console.log(event.target.value);
    // Que añada la tarea a la lista de tareas en Apps
  }
}

export { CreateTodo };