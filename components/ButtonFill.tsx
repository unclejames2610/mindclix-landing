"use client";
import React, { FC } from "react";

export interface ButtonProps {
  text: string;
}

const ButtonFill: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="rounded-[6px] p-2.5 border bg-dark-blue border-dark-blue text-white w-[157px] h-[50px] text-base leading-[19.2px] ">
      {text}
    </button>
  );
};

export default ButtonFill;
