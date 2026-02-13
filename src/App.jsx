import React from 'react'

function App() {
  return (
    <div className='flex h-screen bg-grey-100'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <header/>
        <div className='p-6 overflow-y-auto'>
        <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App