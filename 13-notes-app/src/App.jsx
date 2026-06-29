import React, { useState } from "react";

const App = () => {

const [title, setTitle] = useState('')
const submitHandler = (e) =>{
  e.preventDefault()
  console.log({title,detail});
  setTitle('')
  setDetail('')
}

const [detail, setDetail] = useState('')


  return (
    <div className="h-screen bg-gray-100 lg:flex">
      
      <form action="" className="flex m-5 p-10 flex-col gap-4" onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h1 className="font-bold text-3xl uppercase">Add Notes</h1>
       
          <input type="text" placeholder="Enter Notes Heading"  className="p-5 border-2 rounded-xl" value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
            
          }}
          />
        <textarea placeholder="Enter Details" name="" id="" className="p-5 border-2 rounded-xl" value={detail} onChange={(e)=>{
          setDetail(e.target.value)
        }}></textarea>


        <button className="bg-transparent text-black p-3 border-2">Add Note</button>
       
      </form>
      <div className=" m-15 p-10 lg:border-l-2">
        <h1 className="text-black text-2xl font-bold uppercase">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-black"></div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
