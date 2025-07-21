import React from 'react'
import Logo from '../assets/logo/site-logo.svg'

const Navbar = () => {
  return (
    <>
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-9 px-4 border-b border-gray-400/20 shadow">
  <div className="flex items-center flex-1 md:absolute md:left-19">
    <div className="flex items-center justify-between w-full md:w-auto">
      <a href="javascrip:void(0)" aria-label="Home">
        <img
          src={Logo}
          height={50}
          width={165}
        />
      </a>
      <div className="-mr-2 flex items-center md:hidden">
        <button
          type="button"
          id="main-menu"
          aria-label="Main menu"
          aria-haspopup="true"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        >
          <svg
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div className="hidden md:flex md:space-x-10">
    <a
      href="#features"
      className="font-medium  transition duration-150 ease-in-out"
    >
      Features
    </a>
    
  </div>
  <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-19">
    <span className="inline-flex">
      <a
        href="/login"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
      >
        Login
      </a>
    </span>
    <span className="inline-flex rounded-md shadow ml-2">
      <a
        href="/signup"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
      >
        Get started
      </a>
    </span>
  </div>
</nav>
    </>
  )
}

export default Navbar