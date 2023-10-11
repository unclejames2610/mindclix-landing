"use client";
import Image from "next/image";
import React from "react";
import image2 from "@/public/image2.svg";
import bigGreenIndicator from "@/public/bigGreenIndicator.svg";
import smallGreenIndicator from "@/public/smallGreenIndicator.svg";

const About = () => {
  return (
    <div className="mx-auto px-4 py-24 flex items-center justify-center gap-8 bg-pale-blue relative">
      <div className="absolute right-48 top-24 z-10">
        <div className="relative flex items-center w-[59px] h-[51.63px]">
          <Image
            src={bigGreenIndicator}
            alt="big green indicator"
            fill={true}
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute right-36 top-32 z-10">
        <div className="relative flex items-center w-[38px] h-[33.25px]">
          <Image
            src={smallGreenIndicator}
            alt="small green indicator"
            fill={true}
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <div className="relative flex items-center w-[428px] h-[333px] rounded ">
          <Image
            src={image2}
            alt="about"
            fill={true}
            sizes="100%"
            className="object-contain rounded"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 ">
        <h1 className="text-black font-bold text-[55px] leading-[66px] ">
          About Mindclix
        </h1>
        <p className="text-lg w-[392px]">
          Our dedicated team of experienced therapists are here to guide you on
          your journey towards a happier, healthier mind. Take a step towards
          self-discovery and healing with Mindclix.
        </p>
      </div>
    </div>
  );
};

export default About;
