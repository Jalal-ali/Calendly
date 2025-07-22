import React from 'react'
import Navbar from './components/Navbar.jsx'
import Topbar from './components/Topbar.jsx'


const App = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <section className='content-center bg-gray-100'>
      {/* heading and para  */}
      <div className="text-center pt-14 px-14 pb-8">
    <h1 class="mb-6 text-4xl font-bold leading-none tracking-tight text-[#0B3558] md:text-5xl lg:text-[80px] ">Book meetings that work <br /> for you</h1>
<p class="mb- text-lg font-normal text-gray-500 lg:text-[20px] sm:px-16 xl:px-48 ">Automate scheduling to solve any meeting scenario, improve meeting prep and follow-up, route calls to experts, connect all the tools you need, and stay secure.</p>
      </div>
      {/* buttons  */}
      <div className="flex text-center justify-center">
        <a href='javascrip:void(0)' class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 me-2 mb-2">
          Sign up for free</a>
        <a href='javascrip:void(0)' class="cursor-pointer border text-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 me-2 mb-2 ">
          Get a demo</a>
      </div>

      {/* cards  */}
      <div className="flex">
        
      </div>
      

    </section>

    </>
  )
}

export default App