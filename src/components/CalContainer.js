import React from "react";
import Numbers from "./Numbers";

const CalContainer = () => {
  return (
    <div className="flex justify-evenly ">
      <div className="flex flex-col justify-end items-center w-[400px] p-5 bg-gray-400 mt-16 gap-4 shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold text-gray-50">Calculator</h3>
        <Numbers />
      </div>

      <div className="flex items-center cursor-pointer">👁️‍🗨️</div>
    </div>
  );
};

export default CalContainer;
