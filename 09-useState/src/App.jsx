import React, { useState } from 'react'

const App = () => {


  const [Num, setNum] = useState(0)


  function Increase(){
    setNum(Num+5)
  }
  function Decrease(){
    setNum(Num-5)
  }
  return (
    <div>
      
      <h1 className=' bg-gray-400 text-5xl m-10 p-10'>{Num}</h1>
      <button className='bg-gray-300 m-5 p-3' onClick={Increase}>Increase</button>
      <button className='bg-gray-300 m-5 p-3' onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App