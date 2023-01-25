import React from 'react'

function TodoList(props) {

  const filterTodos = props.children.filter(todo => {
    const text = todo.props.text;
    return text.toLowerCase().includes(props.searchValue.toLowerCase())
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