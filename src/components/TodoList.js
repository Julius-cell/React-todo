import React from 'react'

function TodoList(props) {
  const renderFunc = props.children || props.render;

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
      {(!props.isLoading && !todosIncompleted?.length && !props.searchValue) && props.onEmptyTodos()}

      {/* Both lines do the same */}
      {/* {todosIncompleted.map(todo => props.render(todo))} */}
      
      <ul>
        {todosIncompleted?.map(renderFunc)}
        {/* {props.children} */}
      </ul>
    </section>
  )
}

export { TodoList };