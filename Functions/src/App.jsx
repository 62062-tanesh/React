import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked.');
    
  }
  return (
    <div >
      <button className='bg-red-500 m-20 p-3 rounded-full text-white font-bold'  onClick={btnClicked}>Button</button>
    </div>
  )
}

export default App