import React from 'react'

function TodoLoading() {
  return (
    <React.Fragment>
      <div className="flex items-center mb-4">
        <div className="bg-slate-100 w-4 h-4 blur-sm"></div>
        <div className='ml-2 bg-slate-100 h-4 w-full blur-sm'></div>
      </div>
      <div className="flex items-center mb-4">
        <div className="bg-slate-100 w-4 h-4 blur-sm"></div>
        <div className='ml-2 bg-slate-100 h-4 w-full blur-sm'></div>
      </div>
      <div className="flex items-center mb-4">
        <div className="bg-slate-100 w-4 h-4 blur-sm"></div>
        <div className='ml-2 bg-slate-100 h-4 w-full blur-sm'></div>
      </div>
    </React.Fragment>
  )
}

export { TodoLoading };