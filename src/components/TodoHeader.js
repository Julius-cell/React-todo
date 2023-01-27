import React from 'react';


function TodoHeader({ children, isLoading }) {
  
  return (
    <header>
      {
        React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, { isLoading }))
      }
    </header>
  )
}

export { TodoHeader };