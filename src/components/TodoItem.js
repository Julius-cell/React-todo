import React from 'react'

function TodoItem({ todo, onCompleted }) {

  return (
    <div className="flex items-center mb-4">
      <input
        id="default-checkbox" 
        type="checkbox" 
        value={todo.id} 
        className="w-4 h-4" 
        onClick={onCompleted}
      />
      <label 
        htmlFor="default-checkbox" 
        className="ml-2 text-sm font-medium"
      >
        {todo.text}
      </label>
    </div>
  )
}

export { TodoItem };