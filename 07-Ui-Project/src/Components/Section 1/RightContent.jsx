import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full w-2/3 bg-blue-200 items-center px-10 py-10 rounded-2xl flex gap-10 '>
        <RightCard/>
        <RightCard/>
        <RightCard/>
    </div>
  )
}

export default RightContent