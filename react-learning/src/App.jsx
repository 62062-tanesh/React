import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src="https://logopng.com.br/logos/amazon-2.png" alt="" />
          <button>
            Save <Bookmark size={12} color="white" />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>{" "}
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part time</h4>
            <h4>Senior Level</h4>
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
