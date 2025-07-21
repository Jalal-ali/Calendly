import React from 'react'
import Navbar from './components/Navbar.jsx'
import Topbar from './components/Topbar.jsx'


const App = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <h1 className='text-center text-black'>Hello App</h1>
    </>
  )
}

export default App