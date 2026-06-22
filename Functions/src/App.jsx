import React from 'react'

const App = () => {
  function inputChanging() {
    console.log('user is typing')
  }

  return (
    <div >
      <input onChange={function (ele){
        inputChanging(ele.target.value)
      }} type="text" placeholder='Enter Something' id='data' className='p-5 m-10' />
    </div>
  )
}

export default App
