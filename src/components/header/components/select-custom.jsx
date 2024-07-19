import React from "react";
import clsx from "clsx";
export const SelectCustom = ({ data, className, text, iconClassName = "" }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  return (
    <ul
      tabIndex={0}
      className={clsx(
        "dropdown-content p-0 overflow-hidden menu bg-white rounded-box z-[1]   shadow",
        className
      )}
    >
      <span className="text-sm font-semibold text-black-light text-left px-2 py-3">
        {text}
      </span>
      {data?.map((item, i) => (
        <li
          key={i}
          className={`text-xs py-1 px-1 font-normal w-full ${
            activeIndex == i
              ? "text-white bg-primary"
              : "text-river-styx bg-transparent"
          }`}
          onClick={() => setActiveIndex(i)}
        >
          <a href={item?.link}>
            <span
              className={clsx(
                "w-full p-2 rounded-full bg-ma-white",
                iconClassName
              )}
            >
              {item?.icon}
            </span>
            {item?.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
