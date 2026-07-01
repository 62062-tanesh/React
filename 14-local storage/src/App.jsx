import React from 'react'

const App = () => {

const user = {
  userName : "Tanesh",
  Roll_No : "12",
  Class : "Four"
}

localStorage.setItem("User",JSON.stringify(user))


console.log(JSON.parse(localStorage.getItem("User")));


  return (
    <div>App</div>

  )
}

export default App