"use client";
import Image from "next/image";
import React from "react";
import therapist1 from "@/public/therapist1.svg";
import therapist2 from "@/public/therapist2.svg";
import therapist3 from "@/public/therapist3.svg";
import therapist4 from "@/public/therapist4.svg";
import therapist5 from "@/public/therapist5.svg";
import therapist6 from "@/public/therapist6.svg";
import therapist7 from "@/public/therapist7.svg";
import therapist8 from "@/public/therapist8.svg";

import bigGreenIndicator from "@/public/bigGreenIndicator.svg";
import smallGreenIndicator from "@/public/smallGreenIndicator.svg";

import indicator from "@/public/indicator.svg";

const OurTherapists = () => {
  return (
    <div className="flex flex-col mx-auto bg-custom-white-two relative h-[661px] p-4 py-12 ">
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="font-bold text-[55px] leading-[66px] text-black text-center">
          Our Therapists
        </h1>
        <p className="text-black text-2xl leading-9 w-[753px] text-center">
          Our therapists are not just professionals; they are compassionate
          guides on your journey towards better mental health.
        </p>
      </div>

      <div className="absolute left-16 top-24 z-10">
        <div className="relative flex items-center w-[59px] h-[51.63px]">
          <Image
            src={bigGreenIndicator}
            alt="indicator"
            fill={true}
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[430px] top-20 z-10">
        <div className="relative flex items-center w-[40px] h-[35px]">
          <Image
            src={smallGreenIndicator}
            alt="indicator"
            fill={true}
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute right-36 top-72 z-10">
        <div className="relative flex items-center w-[40px] h-[35px]">
          <Image
            src={smallGreenIndicator}
            alt="indicator"
            fill={true}
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute right-44 top-[340px] z-10">
        <div className="relative flex items-center w-[40px] h-[35px]">
          <Image
            src={indicator}
            alt="indicator"
            fill={true}
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-20 top-48 z-10">
        <div className="relative flex items-center w-[90px] h-[90px] rounded-full">
          <Image
            src={therapist1}
            alt="therapist 1"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <div className="absolute left-48 bottom-36 z-10">
        <div className="relative flex items-center w-[90px] h-[90px] rounded-full">
          <Image
            src={therapist2}
            alt="therapist 2"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <div className="absolute left-80 top-72 z-10">
        <div className="relative flex items-center w-[65px] h-[65px] rounded-full">
          <Image
            src={therapist3}
            alt="therapist 3"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <div className="absolute left-[500px] bottom-52 z-10">
        <div className="relative flex items-center w-[65px] h-[65px] rounded-full">
          <Image
            src={therapist4}
            alt="therapist 4"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <div className="absolute right-[565px] bottom-24 z-10">
        <div className="relative flex items-center w-[65px] h-[65px] rounded-full">
          <Image
            src={therapist5}
            alt="therapist 5"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <div className="absolute right-[520px] top-72 z-10">
        <div className="relative flex items-center w-[90px] h-[90px] rounded-full">
          <Image
            src={therapist6}
            alt="therapist 6"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <div className="absolute right-52 top-52 z-10">
        <div className="relative flex items-center w-[65px] h-[65px] rounded-full">
          <Image
            src={therapist7}
            alt="therapist 7"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <div className="absolute right-24 bottom-36 z-10">
        <div className="relative flex items-center w-[90px] h-[90px] rounded-full">
          <Image
            src={therapist8}
            alt="therapist 8"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTherapists;
