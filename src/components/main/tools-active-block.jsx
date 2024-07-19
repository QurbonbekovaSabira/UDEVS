"use client";
import React, { useState } from "react";
import { toolData } from "@/data/data";
export const ToolsActiveBlock = () => {
  const [active, setIsActive] = useState("all");
  console.log(active);
  return (
    <>
      <div className="flex flex-wrap items-center gap-5">
        <label
          onClick={() => setIsActive("frontend")}
          className="label cursor-pointer flex items-center gap-1"
        >
          <input
            type="radio"
            name="radio"
            className="radio radio-customcolor radio-customborder"
          />
          <span className="label-text text-lg text-black font-semibold">
            Frontend
          </span>
        </label>

        <label
          onClick={() => setIsActive("backend")}
          className="label cursor-pointer flex items-center gap-1"
        >
          <input
            type="radio"
            name="radio"
            className="radio radio-customcolor radio-customborder"
          />
          <span className="label-text text-lg text-black font-semibold">
            Backend
          </span>
        </label>
        <label
          onClick={() => setIsActive("ux/ui")}
          className="label cursor-pointer flex items-center gap-1"
        >
          <input
            type="radio"
            name="radio"
            className="radio radio-customcolor radio-customborder"
          />
          <span className="label-text text-lg text-black font-semibold">
            UX/UI
          </span>
        </label>
        <label
          onClick={() => setIsActive("mobile")}
          className="label cursor-pointer flex items-center gap-1"
        >
          <input
            type="radio"
            name="radio"
            className="radio radio-customcolor radio-customborder"
          />
          <span className="label-text text-lg text-black font-semibold">
            Mobile
          </span>
        </label>
        <label
          onClick={() => setIsActive("devops")}
          className="label cursor-pointer flex items-center gap-1"
        >
          <input
            type="radio"
            name="radio"
            className="radio radio-customcolor radio-customborder"
          />
          <span className="label-text text-lg text-black font-semibold">
            Devops
          </span>
        </label>
      </div>
      <div className="grid grid-cols-5 phone:grid-cols-3 tablet:grid-cols-10 gap-3">
        {toolData?.map((item, i) => (
          <div
            className={`p-4 h-[90px] flex items-center justify-center flex-col gap-4   rounded-md transition-all delay-300 ${
              active == item?.desc ? "bg-pale-blue opacity-100" : "opacity-60"
            }`}
            key={i}
          >
            <div className="grow">{item?.icon}</div>
            <p>{item?.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
