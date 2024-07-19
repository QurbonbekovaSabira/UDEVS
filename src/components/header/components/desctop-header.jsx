"use client";
import React from "react";
import { useState } from "react";
import { SelectCustom } from "./select-custom";
import { servicesData, portfolioData, langData } from "../../../data/data";
import { ArrowBottom } from "../../../../public/icon/arrow-bottom";
import { Button } from "@/components/main/button";
import Link from "next/link";
export const DesctopHeader = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="flex items-center justify-between ">
      <a
        href="#directtion"
        onClick={() => setIsActive(1)}
        className={`text-sm text-river-styx font-bold py-[10px] border-b-[2px] rounded-b-sm transition-all duration-100 ${
          isActive === 1 ? " border-primary text-black" : " border-transparent"
        }`}
      >
        Directtion
      </a>
      <Link
        onClick={() => setIsActive(2)}
        className={`text-sm text-river-styx font-bold py-[10px] border-b-[2px] rounded-b-sm transition-all duration-100 ${
          isActive === 2 ? " border-primary text-black" : " border-transparent"
        }`}
        href="#team"
      >
        Command
      </Link>

      <>
        <div className="dropdown dropdown-bottom inline-block">
          <div
            tabIndex={0}
            role="button"
            className="btn !m-0 !p-0 w-full border-none"
          >
            <a
              href="#services"
              onClick={() => setIsActive(3)}
              className={`text-sm flex items-center gap-2 text-river-styx font-bold py-[10px] border-b-[2px] rounded-b-sm transition-all duration-100 ${
                isActive === 3 ? " border-primary" : " border-transparent"
              }`}
            >
              Services <ArrowBottom />
            </a>
            <SelectCustom
              className={"w-[250px]"}
              data={servicesData}
              text={"Services"}
            />
          </div>
        </div>
      </>

      <a
        href="#tools"
        onClick={() => setIsActive(4)}
        className={`text-sm text-river-styx font-bold py-[10px] border-b-[2px] rounded-b-sm transition-all duration-100 ${
          isActive === 4 ? " border-primary" : " border-transparent"
        }`}
      >
        Tool
      </a>
      <a
        href="#clients"
        onClick={() => setIsActive(5)}
        className={`text-sm text-river-styx font-bold py-[10px] border-b-[2px] rounded-b-sm transition-all duration-100 ${
          isActive === 5 ? " border-primary" : " border-transparent"
        }`}
      >
        Clients
      </a>
      <>
        <div className="dropdown dropdown-bottom inline-block">
          <div
            tabIndex={0}
            role="button"
            className="btn !m-0 !p-0 w-full border-none"
          >
            <a
              href="#"
              onClick={() => setIsActive(6)}
              className={`text-sm flex items-center gap-2 text-river-styx font-bold py-[10px] border-b-[2px] rounded-b-sm transition-all duration-100 ${
                isActive === 6 ? " border-primary" : " border-transparent"
              }`}
            >
              Portfolio <ArrowBottom />
            </a>
            <SelectCustom
              className={"w-[250px] "}
              data={portfolioData}
              text={"Portfolio"}
              iconClassName="p-0 bg-transparent"
            />
          </div>
        </div>
      </>
      <>
        <div className="dropdown dropdown-bottom inline-block">
          <div
            tabIndex={0}
            role="button"
            className="btn !m-0 !p-0 w-full border-none"
          >
            <a
              href="#"
              onClick={() => setIsActive(7)}
              className={`text-sm text-river-styx flex items-center gap-2 font-bold py-[10px] border-b-[2px] rounded-b-sm transition-all duration-100 ${
                isActive === 7 ? " border-primary" : " border-transparent"
              }`}
            >
              Language <ArrowBottom />
            </a>
            <SelectCustom
              className={"w-[150px] "}
              data={langData}
              text={"Language"}
              iconClassName="p-0 bg-transparent"
            />
          </div>
        </div>
      </>
      <Button>
        <a href="#">Contact</a>
      </Button>
    </div>
  );
};
