import React from "react";
import clsx from "clsx";

export const Button = ({ className, children }) => {
  return (
    <button
      className={clsx(
        `py-[10px] px-4 text-sm text-white font-bold transition-all duration-300 rounded-lg bg-primary`,
        className
      )}
    >
      {children}
    </button>
  );
};
