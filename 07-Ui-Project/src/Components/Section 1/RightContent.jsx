import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
    
  return (
    <div className='h-full w-2/3 items-center px-10 py-10 rounded-2xl flex gap-10 overflow-x-auto flex-nowrap'>
        {props.users.map(function(ele,indx){
          return <RightCard key={indx}  id={indx+1} img={ele.img} tag = {ele.tag} intro = {ele.intro}/>
        })}
    </div>
  )
}

export default RightContent