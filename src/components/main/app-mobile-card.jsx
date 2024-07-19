import React from "react";
import FadeInUp from "./fadeInUp";
import clsx from "clsx";
export const AppMobileCard = ({ data, className = "" }) => {
  return (
    <FadeInUp>
      <div
        className={clsx(
          "py-[10px] w-[150px] h-full rounded-lg  pl-[10px] pr-[20px] bg-ma-white",
          className
        )}
      >
        <div className="mb-3 w-[56px] h-[56px]">{data?.icon}</div>
        <p className="tablet:text-lg text-nowrap text-sm text-black font-semibold">
          {data?.text}
        </p>
      </div>
    </FadeInUp>
  );
};
