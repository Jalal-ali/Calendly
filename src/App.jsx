import React from 'react'
import Navbar from './components/Navbar.jsx'
import Topbar from './components/Topbar.jsx'
import ReactPlayer from 'react-player'


const App = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    {/* 1st section  */}
    <section className='content-center bg-gray-100 pb-10'>
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

    {/* 2nd section  */}
    <section className='content-center py-10'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-8 bg-white">
  {/* Left Section - Image */}
  <div className="overflow-hidden rounded-xl w-full max-w-xl mx-auto">
  <ReactPlayer
    url="https://youtu.be/RO0-SAkYe0w?si=79TqUrGGGFyo83a1"
    width="100%"
    height="100%"
    controls
  />
</div>

  {/* Right Section - Text Content */}
  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
    <h2 className="text-2xl md:text-[50px] font-bold text-[#0B3558]">For everyone who schedules meetings
</h2>
    <p class="text-lg font-normal text-gray-500 lg:text-[20px]">
      Meet faster to close deals, support customers, and hire top talent – bring the right people together, automate tasks like sending reminders, and drive business growth with integrations, analytics, and security features.

</p>
    <a
  href="#"
  className="group mt-3 text-[#476788]  hover:text-blue-600 inline-flex items-center transition "
>
  Learn More
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-4 h-4 ml-2 transition-all group-hover:ml-3"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</a>


  </div>
</div>


    </section>

    </>
  )
}

export default App