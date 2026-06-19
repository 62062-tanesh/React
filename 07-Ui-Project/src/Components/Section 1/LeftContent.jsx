import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 rounded-4xl  px-10 py-6 flex flex-col justify-between'>
        

        <div>
            <h2 className='text-5xl font-bold mb-10'>Prospective Customer Segmentation</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt necessitatibus recusandae error. Reiciendis libero incidunt dolorem aut ullam quidem, dolorum sit, fugit saepe assumenda cumque. Ea repellendus suscipit nobis.</p>
        </div>

        <div className=''>
            <ArrowUpRight size={100}/>
        </div>
    </div>
  )
  
}

export default LeftContent