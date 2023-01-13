import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContex';

function TodoList(props) {
  const { searchValue } = useContext(TodoContext);

  const filterTodos = props.children.filter(todo => {
    const text = todo.props.text;
    return text.toLowerCase().includes(searchValue.toLowerCase())
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