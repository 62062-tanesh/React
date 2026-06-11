import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src="https://logopng.com.br/logos/amazon-2.png" alt="" />
          <button>
            Save <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>Amzon</h3>
          <span>Senior UI/UX Designer</span>{" "}
          <div className="content1">Part-TIme</div>
          <div className="content2">Senior Level</div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default App;
