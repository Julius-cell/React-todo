import React from 'react'

function TodoList(props) {
  let todosIncompleted = props.todos?.filter(todo => !todo.completed);

  if (todosIncompleted.length && props.searchValue ) {
    todosIncompleted = todosIncompleted?.filter(todo => {
      return todo.text.toLowerCase().includes(props.searchValue.toLowerCase());
    });
  }

  return (
    <section>
      {props.isError && props.onError()}
      {props.isLoading && props.onLoading()}
      {(!props.isLoading && !todosIncompleted?.length) && props.onEmptyTodos()}

      {/* Both lines do the same */}
      {/* {props.todosIncompleted.map(todo => props.render(todo))} */}
      {todosIncompleted?.map(props.render)}
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export { TodoList };