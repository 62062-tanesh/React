import React from "react";

const App = () => {

const submitHandler = (e) =>{
  e.preventDefault()

  console.log("Form Submitted");
  
}

  return (
    <div className="h-screen bg-gray-100 lg:flex">
      <form action="" className="flex m-5 p-10 flex-col gap-8" onSubmit={(e)=>{
        submitHandler(e)
      }}>
       
          <input type="text" placeholder="Enter Notes Heading"  className="p-5 border-2 rounded-xl"/>
        <textarea placeholder="Enter Details" name="" id="" className="p-5 border-2 rounded-xl"></textarea>

        <button className="bg-transparent text-black p-3 border-2">Add Note</button>
       
      </form>
      <div className=" m-15 p-5 bg-black rounded-xl">
        <h1 className="text-white text-2xl font-bold uppercase">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
