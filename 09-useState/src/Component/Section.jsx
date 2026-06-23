import React, { useState } from 'react'

const Section = () => {

    const [num, setnum] = useState({user:'Tanesh', Age:'22'})

    const btnClicked = () =>{
        const newNum = {...num};
        newNum.user = 'Ashok'
        newNum.Age = 30
        setnum(newNum)
    }

  return (
    <div>
        <h1 className='bg-red-500 text-white text-2xl font-bold m-2 p-4'>Name: {num.user}, Age:{num.Age}</h1>
        <button className='bg-gray-300 rounded-full m-2 p-4 w-25' onClick={btnClicked}>click</button>
    </div>
  )
}

export default Section