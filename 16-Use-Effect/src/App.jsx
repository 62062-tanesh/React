import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(() => {
    console.log("Num is Changed");

  }, [num,num2])
  

  return (
    <div><h2>{num}</h2>
    <h2>{num2}</h2>
      <div>
             <button onMouseEnter={()=>{
              setNum(num+1)
             }}   onMouseLeave={()=>{
              setNum2(num2+10)
             }}>Click</button>
      </div> 

 
    </div>
  )
}

export default App