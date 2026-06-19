import React from "react";
import { ArrowRight } from "lucide-react";

const RightCard = () => {
  return (
    <div className="h-full bg-gray-200 rounded-2xl w-80 overflow-hidden relative">
      <img
        className="object-cover h-full"
        src="https://images.pexels.com/photos/5965926/pexels-photo-5965926.jpeg"
        alt=""
      />

      <div className="absolute top-0 left-0 p-4 flex flex-col h-full w-full justify-between items-start">
        <h2 className="h-8 w-8 bg-white rounded-full flex justify-center items-center text-xl font-medium">1</h2>
        <div>
          <p className="text-black leading-6 bg-white/50 px-3 py-1 rounded-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, labore fugit eius accusamus neque recusandae.
          </p>

          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-12 py-3 rounded-full mt-7 text-lg">Satified</button>
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
