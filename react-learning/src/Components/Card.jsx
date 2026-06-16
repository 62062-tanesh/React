import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {

    // console.log(props.Company)
  return (
    <div className="card">
        <div>
          <div className="top">
            <img
              src={props.Logo}
              alt="Image"
            />
            <button>
              Save <Bookmark size={15} />
            </button>
          </div>
          <div className="center">
            <h3>
              {props.Company} <span>{props.DatePosted}</span>
            </h3>
            <h2>{props.Post}</h2>
            <div className="tag">
              <h4>Part Time</h4>
              <h4>Senior level</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card