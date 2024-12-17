import React from "react";

import logo from "../assets/img/erin-lindford.jpg";

export const Card = () => {
  return (
    <div className="m-auto py-8 px-8 max-w-sm mw-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x6 ">
      <img
        src={logo}
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        alt="Erlin"
      />
      <div className="text-center space-y-2   sm:text-left">
        <div className="space-y-0.5 ">
          <p className="text-lg text-black font-semibold">Erin Lindford</p>
          <p className="text-slate-500 font-medium">Product Engineer</p>
        </div>
      </div>
    </div>
  );
};
