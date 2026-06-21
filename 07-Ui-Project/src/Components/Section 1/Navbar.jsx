import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-10 text-white text-1xl text' >
        <h2 className='bg-black text-white px-4 py-2 rounded-full uppercase'>Target Audience</h2>
        <h2 className='text-green-400 uppercase font-bold'>Home</h2>
        <button className=' bg-gray-200 text-black px-4 py-2 rounded-full uppercase tracking-wider text-sm'>Digital Banking Platfrom</button>


    </div>
  )
}

export default Navbar