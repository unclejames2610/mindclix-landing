"use client";
import React, { FC } from "react";
import { ButtonProps } from "./ButtonFill";

const ButtonNoFill: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="rounded-[6px] p-2.5 border bg-transparent border-dark-blue text-dark-blue w-[157px] h-[50px] text-base leading-[19.2px] ">
      {text}
    </button>
  );
};

export default ButtonNoFill;
