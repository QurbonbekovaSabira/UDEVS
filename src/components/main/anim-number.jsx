"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import FadeInUp from "./fadeInUp";
export const AnimNumber = () => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      {counter && (
        <FadeInUp>
          {" "}
          <p className="text-primary animate-fadeInUp font-bold tablet:text-[120px] tablet:leading-[96px] text-[80px] leading-[70px] mb-1">
            <CountUp start={20} end={100} duration={2} delay={0} /> +
          </p>
        </FadeInUp>
      )}
    </ScrollTrigger>
  );
};
