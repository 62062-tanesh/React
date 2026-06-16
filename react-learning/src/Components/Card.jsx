import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {

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
              <h4>{props.Tag1}</h4>
              <h4>{props.Tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.Pay}</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card