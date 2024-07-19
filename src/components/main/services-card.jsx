import React from "react";
import FadeInUp from "./fadeInUp";
export const ServicesCard = ({ data }) => {
  return (
    <FadeInUp>
      <div className="tablet:p-8 animate-fadeInUp p-[14px] bg-ma-white  h-full">
        <div className="mb-6 w-[56px] h-[56px]">{data?.icon}</div>
        <p className="text-river-styx font-medium tablet:text-xl text-base mb-4">
          {data?.text}
        </p>
      </div>
    </FadeInUp>
  );
};
