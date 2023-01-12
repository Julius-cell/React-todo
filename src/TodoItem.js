import React from 'react'

function TodoItem({ text, onCompleted }) {

  return (
    <div className="flex items-center mb-4">
      <input
        id="default-checkbox" 
        type="checkbox" 
        value={text} 
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
        onClick={onCompleted}
      />
      <label 
        htmlFor="default-checkbox" 
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  )
}

export { TodoItem };