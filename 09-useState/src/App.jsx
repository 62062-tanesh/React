import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  function changeNum(){
    setNum(30)
  }

  return (
    <div>
      
      <h1>THis is the value of {num}</h1>

      <button className='text-white m-3 px-2 bg-red-500' onClick={changeNum}>Button</button>
    </div>
  )
}

export default App