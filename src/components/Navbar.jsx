import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-500 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-3xl mx-8 my-2'>Task Scheduler</span>
        </div>
        {/* <ul className="flex gap-8">
        <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all '>Your tasks</li>
        </ul> */}
    </nav>
  )
}

export default Navbar