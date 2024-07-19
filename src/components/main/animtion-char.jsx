"use client";
import React, { useEffect, useState } from "react";

export const AnimtionChar = ({ texts, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [active, setActive] = useState(false);
  const [text, setText] = useState(texts[0]);
  const [iseSpeed, setIsSpeed] = useState(speed);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText?.length < text?.length) {
      timeout = setTimeout(() => {
        setDisplayText(text?.substring(0, displayText?.length + 1));
        setIsSpeed(speed);
      }, iseSpeed);
    } else if (isDeleting && displayText?.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText?.length - 1));
        setIsSpeed(speed);
      }, iseSpeed);
    } else if (!isDeleting && displayText?.length === text?.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, iseSpeed / 10);
    } else if (isDeleting && displayText?.length === 0) {
      setIsDeleting(false);
      if (loop < texts?.length) {
        setText(texts[loop + 1]);
        setLoop(loop + 1);
      } else {
        setLoop(loop + 1);
        setText(texts[0]);
      }
    }
    setActive(!active);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loop, text, iseSpeed]);

  return (
    <p className="font-semibold tablet:leading-[58px] tablet:font-bold tablet:text-[40px]  text-2xl text-primary">
      {displayText}
      <span className={`${active ? "opacity-100" : "opacity-10"} text-primary`}>
        |
      </span>
    </p>
  );
};
