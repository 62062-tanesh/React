import React, { useState } from "react";

const App = () => {

const [title, setTitle] = useState('')
const [detail, setDetail] = useState('')
const [task, setTask] = useState([])


const submitHandler = (e) =>{
  e.preventDefault()

const copyTask = [...task];
copyTask.push({title,detail})
setTask(copyTask)

  setTitle('')
  setDetail('')
}



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


        <button className="bg-transparent text-black p-3 border-2 active:bg-gray-500">Add Note</button>
       
      </form>
      <div className=" m-15 p-10 lg:border-l-2">
        <h1 className="text-black text-2xl font-bold uppercase">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
          {task.map(function(ele,idx){
            return <div key={idx} className="h-52 w-40 rounded-2xl bg-cover bg-[url('https://cdn5.vectorstock.com/i/1000x1000/02/89/realistic-spiral-notebook-mockup-vector-27020289.jpg')] text-white p-5 text-xl">
              <h2 className="text-2xl font-bold text-black p-2">{ele.title}</h2> <hr className="text-black w-full" /><p className="text-red-500">{ele.detail}</p>
            </div>
          })}
        </div>
        
      </div>
    </div>
  );
};

export default App;
