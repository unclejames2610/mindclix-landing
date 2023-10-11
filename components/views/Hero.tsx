"use client";
import React from "react";
import ButtonFill from "../ButtonFill";
import Image from "next/image";
import image1 from "@/public/image1.svg";
import indicator from "@/public/indicator.svg";
import ellipse from "@/public/ellipse.svg";

const Hero = () => {
  return (
    <div className="mx-auto flex relative justify-between items-center bg-lime">
      {/* <div className="flex flex-col w-[649px] gap-5 pl-[35px] absolute left-[67px] top-[204px] "> */}
      <div className="flex flex-col w-[649px] gap-5 pl-10 z-10">
        <h1 className="font-bold text-black leading-[82.5px] text-[55px] w-[649px]">
          Unlock your Mental Well-Being & Live a Healthy, Fun & Engaging Life
        </h1>
        <p className="text-2xl leading-[36px] text-black w-[537px]">
          Personalize your experience to reach your health and body goals.
        </p>
        <ButtonFill text="Learn more" />
      </div>
      {/* <div className="absolute left-[680px] top-[44px]"> */}
      <div>
        <div className="relative flex items-center w-[546px] h-[706px]">
          <Image
            src={image1}
            alt="hero"
            fill={true}
            sizes="100%"
            className="object-contain z-10"
          />

          <div className="absolute right-10 top-20 z-10">
            <div className="relative flex items-center w-[59px] h-[51.63px]">
              <Image
                src={indicator}
                alt="indicator"
                fill={true}
                sizes="100%"
                className="object-contain"
              />
            </div>
          </div>

          <div className="absolute right-0 -bottom-[92px]">
            <div className="relative flex items-center w-[650px] h-[650px]">
              <Image
                src={ellipse}
                alt="ellipse"
                fill={true}
                sizes="100%"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Hero;
