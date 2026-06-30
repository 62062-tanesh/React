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

const deleteNote = (idx)=>{
  const copyTask = [...task]
  copyTask.splice(idx,1)
  setTask(copyTask) 
}


  return (
    <div className="h-[90%] bg-gray-100 w-auto lg:flex">
      
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
      <div className=" m-10 p-3 lg:border-l-2">
        <h1 className="text-black text-2xl font-bold uppercase">Recent Notes</h1>
        <div className="flex flex-wrap gap-3 mt-5 overflow-auto">
          {task.map(function(ele,idx){
            return <div key={idx} className="h-auto w-auto rounded-2xl bg-cover bg-yellow-50 border-red-400 border-1 text-white p-2 text-xl flex flex-col gap-1 flex-wrap">
              <h2 className="text-xl font-bold text-black p-2 uppercase">{ele.title}</h2> <hr className="text-black" /><p className="text-black p-2
              ">{ele.detail}</p>

              <button className="bg-red-500 text-white rounded-xl p-1 text-sm mt-10 font-bold cursor-pointer active:scale-95" onClick={()=>{deleteNote(idx)}}>Delete</button>
            </div>
          })}
        </div>
        
      </div>
    </div>
  );
};

export default App;
