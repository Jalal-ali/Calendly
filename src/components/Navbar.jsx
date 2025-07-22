import React, { useRef, useState } from 'react'
import Logo from '../assets/logo/site-logo.svg'
import Link from '../assets/icons/link-code.svg'
import Dots from '../assets/icons/dots.svg'


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = (menu) => {
        clearTimeout(timeoutRef.current);
        setActiveMenu(menu);
    };


    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 300);
    };
    const menuItems = [
        { name: 'Product', id: 'product' },
        { name: 'Company', id: 'company' },
        { name: 'Resources', id: 'resources' }
    ];
    return (
        <>
            <nav className="relative flex bg-white items-center justify-between sm:h-10 md:justify-center py-9 px-4 border-b border-gray-400/20 shadow">
                {/* logo section  */}
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
                {/* --- Menu Section --- */}
                <div className="relative z-50 hidden md:flex gap-8">
                    {menuItems.map(({ name, id }) => (
                        <div
                            key={id}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-sm font-bold text-gray-700 hover:text-blue-600 inline-flex items-center gap-1 py-10">
                                {name}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 10 6">
                                    <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </button>
                        </div>
                    ))}

                    {/* Dropdown content - only one visible at a time */}
                    {activeMenu && (
                        <div
                            onMouseEnter={() => clearTimeout(timeoutRef.current)}
                            onMouseLeave={handleMouseLeave}
                            className="absolute left-1/2 top-17.5 -translate-x-1/2 mt-4 w-[45rem] bg-white shadow-xl rounded-b-lg border border-gray-200
            transition-all duration-300 ease-in-out grid grid-cols-2 gap-6 p-"
                        >
                            {activeMenu === 'product' && (
                                <>
                                    {/* --- Product Section --- */}
                                    <div className='p-8'>
                                        <h3 className="text-gray-500 font-semibold mb-4">Product</h3>
                                        <ul className="space-y-4 text-gray-700 text-sm">
                                            <li className="flex gap-3 hover:text-blue-600 cursor-pointer ">
                                                <div className="bg-blue-100 p-4 rounded-md inset-shadow-sm inset-shadow-blue-500/20 hover:inset-shadow-blue-500/30">
                                                    <img src={Link} alt="img" height={24}
                                                        width={24} />
                                                </div>
                                                <div className='content-center'>
                                                    <h4 className="font-semibold text-[18px] text-[#0B3558]">Scheduling</h4>
                                                    <p className="text-[16px] text-gray-500">Simplified booking system</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-3 hover:text-blue-600 cursor-pointer">
                                                <div className="bg-blue-100 p-4 rounded-md inset-shadow-sm inset-shadow-blue-500/20 hover:inset-shadow-blue-500/30 ">
                                                    <img src={Dots} alt="img" height={24}
                                                        width={24} />
                                                </div>
                                                <div className='content-center'>
                                                    <h4 className="font-semibold text-[18px] text-[#0B3558]">Scheduling</h4>
                                                    <p className="text-[16px] text-gray-500">Simplified booking system</p>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                    </div>

                                    {/* Platform Section */}
                                    <div className='px-4 py-8 bg-gray-500/10 content-center'>
                                        <h3 className="text-gray-700 font-semibold mb-4">Platform</h3>
                                        <ul className="grid grid-cols-2 gap-6 text-sm text-gray-700 text-start font-semibold text-[14px]">
                                            {[
                                                ['🔌', 'Integrations'],
                                                ['👑', 'Admin controls'],
                                                ['📱', 'Mobile app'],
                                                ['🔒', 'Security'],
                                                ['🌐', 'Browser extension'],
                                                ['📊', 'Analytics']
                                            ].map(([icon, label]) => (
                                                <li key={label} className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                                                    <span>{icon}</span>
                                                    <span>{label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}

                            {activeMenu === 'company' && (
                                <>
                                    <div>
                                        <h3 className="text-gray-500 font-semibold mb-4">About Us</h3>
                                        <ul className="space-y-4 text-gray-700 text-sm">
                                            <li className="hover:text-blue-600 cursor-pointer">Our Story</li>
                                            <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 font-semibold mb-4">Culture</h3>
                                        <ul className="space-y-4 text-gray-700 text-sm">
                                            <li className="hover:text-blue-600 cursor-pointer">Values</li>
                                            <li className="hover:text-blue-600 cursor-pointer">Team</li>
                                        </ul>
                                    </div>
                                </>
                            )}

                            {activeMenu === 'resources' && (
                                <>
                                    <div>
                                        <h3 className="text-gray-500 font-semibold mb-4">Learn</h3>
                                        <ul className="space-y-4 text-gray-700 text-sm">
                                            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                                            <li className="hover:text-blue-600 cursor-pointer">Documentation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 font-semibold mb-4">Help</h3>
                                        <ul className="space-y-4 text-gray-700 text-sm">
                                            <li className="hover:text-blue-600 cursor-pointer">Support</li>
                                            <li className="hover:text-blue-600 cursor-pointer">FAQs</li>
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* button section  */}
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-19">
                    <span className="inline-flex ">
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