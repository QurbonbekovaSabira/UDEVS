import React from "react";
import FadeInUp from "./fadeInUp";
export const TechnologiesCard = ({ data }) => {
  return (
    <FadeInUp>
      <div className="flex flex-col justify-center items-center mb-2">
        <div>{data?.icon}</div>
        <p className="text-lg font-semibold text-black">{data?.text}</p>
      </div>
    </FadeInUp>
  );
};
