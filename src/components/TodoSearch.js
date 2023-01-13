import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContex';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="flex self-center items-end my-5 rounded-md shadow-sm">
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border-gray-300 pl-3 pr-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="perro..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  )
}

export { TodoSearch };