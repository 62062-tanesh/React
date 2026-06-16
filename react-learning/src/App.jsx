import React from "react";
import Card from "./Components/Card.jsx";
import User from "./Components/User.jsx";

const App = () => {
  const arr = [10,20,30]

  return (
    <div className="parent">
      {
        arr.map(function(a){
          return <Card/>
        })
      }
    </div>
  );
};

export default App;
