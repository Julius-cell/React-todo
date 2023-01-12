import React from 'react'

function TodoList({ searchValue, children }) {
  console.log(children);
  const filterTodos = children.filter(todo => {
    return todo.props.text.toLowerCase().includes(searchValue.toLowerCase())
  });

  return (
    <section>
      <ul>
        { filterTodos }
      </ul>
    </section>
  )
}

export { TodoList };