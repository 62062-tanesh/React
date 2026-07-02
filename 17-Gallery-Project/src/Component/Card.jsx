import React from 'react'

const Card = (props) => {
  return (
    <div>

        <a href={props.ele.url} target="_blank">
          <div className="h-40 w-45 bg-white rounded-xl overflow-hidden">
        <img className="h-full w-full object-cover" src={props.ele.download_url} alt="" /></div>
        <div className="flex" >
          <h2 className="mt-2">{props.number+1}.</h2>
        <h2 className="ml-1 mt-2 uppercase">{props.ele.author}</h2>
        </div>
        </a>
    </div>
  )
}

export default Card