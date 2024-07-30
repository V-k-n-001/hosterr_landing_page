import React from 'react'
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
    
    <div className='flex justify-between'>
      <div className='flex  items-center justify-center gap-6 py-4 px-2'>
      <img src="./assets/logo.svg" alt="logo"/>
      <button className="text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl text-sm px-2 py-1 border-2 border-gray-700 hover:from-pink-500 hover:to-orange-500  ">Hosterr is hiring!</button>
        </div>
        <ul className='hidden lg:flex justify-between items-center font-lato  text-gray-950 gap-6 '>
            <li className='hover:underline'><a href="#">Plans</a></li>
        <li className='hover:underline'><a href="#">Find Domain</a></li>
        <li className='hover:underline'><a href="#">Why Hosterr</a></li></ul>
        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
            <a href="#" className='hover:underline'>Sign in</a>
            <button className="rounded-md mx-4 my-4 bg-blue-400 hover:bg-blue-600  text-white md:rounded-md font-medium md:px-4 md:py-3">Join Waitlist</button>
        </div>
        <div className='flex px-2 py-5 lg:hidden' > 
        <FaBars />
      </div>
    </div>
    
  )
}

export default Header
