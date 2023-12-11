import React from "react";
import testimg from "../../../assets/vodka.jpg";

const CardPreview: React.FC = () => {
  return (
    <div>
      <h3 className="font-bold text-xl md:text-2xl my-2">your card looks like this</h3>
      <div className="w-auto md:w-96 bg-gray-500 overflow-hidden rounded-xl">
        <img src={testimg} className="w-full h-44" alt="" />
        <p className="p-2 text-white">vodka</p>
      </div>
    </div>
  );
};

export default CardPreview;
