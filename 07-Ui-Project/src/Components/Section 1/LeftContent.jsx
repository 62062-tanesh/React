import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 rounded-4xl  px-10 py-6 flex flex-col justify-between'>
        

        <div>
            <h2 className='text-5xl font-bold mb-10'><p className='text-3xl text-green-400'>All</p> Printing Solutions <p className='text-green-400'>Available</p></h2>
            <p className='text-gray-600'>Quality Matters Here............. </p>
            <p className='text-gray-600'>we are in Muzaffarpur come and make your brand beyond.</p>
        </div>

        <div className=''>
            <ArrowUpRight size={100}/>
        </div>
    </div>
  )
  
}

export default LeftContent