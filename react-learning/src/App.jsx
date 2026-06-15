import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div>
          <div className="top">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
              alt=""
            />
            <button>
              Save <Bookmark size={15} />
            </button>
          </div>
          <div className="center">
            <h3>
              Amazon <span>5 days Ago</span>
            </h3>
            <h2>Senior UI/UX Designer</h2>
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

      <div className="card">
        <div>
          <div className="top">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
              alt=""
            />
            <button>
              Save <Bookmark size={15} />
            </button>
          </div>
          <div className="center">
            <h3>
              Amazon <span>5 days Ago</span>
            </h3>
            <h2>Senior UI/UX Designer</h2>
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
    </div>
  );
};

export default App;
