import React from "react";
import { ArrowRight } from "lucide-react";

const RightCard = (props) => {
  return (
    <div className="h-full bg-gray-200 rounded-2xl w-80 overflow-hidden relative shrink-0">
      <img className="object-cover h-full" src={props.img} alt="" />

      <div className="absolute top-0 left-0 p-4 flex flex-col h-full w-full justify-between items-start">
        <h2 className="h-8 w-8 bg-white rounded-full flex justify-center items-center text-xl font-medium">
          {props.id}
        </h2>
        <div>
          <p className="text-black leading-6 bg-white/50 px-3 py-1 rounded-xl">
            {props.intro}
          </p>

          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-12 py-3 rounded-full mt-7 text-lg">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full mt-7 text-lg">
              <ArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
