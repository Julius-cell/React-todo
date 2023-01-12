import React from 'react'

function Wrapper(props) {
  const { children } = props;
  return (
    <div className='flex flex-col px-14 py-10 relative min-h-screen'>
      {children}
    </div>
  )
}

export { Wrapper }