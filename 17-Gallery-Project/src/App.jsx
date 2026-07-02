import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Component/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  useEffect(function(){
    getdata()
  },[index])

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
    
    
  };

  let printUserData = <h3 className="text-sm text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(ele,idx){
      return <div key={idx}>
        <Card ele={ele} number={idx}/>
      </div>
    })
  }

  return (
    <div className="bg-black h-screen p-5 overflow-auto">
      <div className="text-white pt-5 flex flex-wrap gap-5 h-80%">{printUserData}</div>

      <div className="flex justify-center items-center gap-5 p-2">
        <button className="bg-amber-300 text-black rounded px-4 py-2 cursor-pointer active:scale-95" onClick={()=>{

          if(index>1){
            setIndex(index-1)
          }
          


        }}>Prev</button>

        <h2 className="text-white">Page-{index}</h2>
        <button className="bg-amber-300 text-black rounded px-4 py-2 cursor-pointer active:scale-95" onClick={()=>{
          setIndex(index+1)
          
        }}>Next</button>
      </div>
    </div>
  );
};

export default App;
