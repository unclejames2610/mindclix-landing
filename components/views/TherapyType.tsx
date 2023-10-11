"use client";
import Image from "next/image";
import React from "react";
import individual from "@/public/individual.svg";
import couples from "@/public/couples.svg";
import teen from "@/public/teen.svg";
import ButtonNoFill from "../ButtonNoFill";
import TherapyTypeCard from "../TherapyTypeCard";
import indicator from "@/public/indicator.svg";

const TherapyType = () => {
  return (
    <div className="flex flex-col items-center relative p-20 bg-custom-white">
      {/* indicator */}
      <div className="absolute left-8 top-8 z-10">
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
      <h1 className="font-bold text-black leading-[82.5px] text-[55px] text-center">
        You deserve to be happy
      </h1>
      <p className="text-2xl leading-[36px] text-black text-center ">
        What type of therapy are you looking for?
      </p>

      {/* therapy type card  */}
      <div className="flex gap-32 mt-16">
        <TherapyTypeCard
          title="Individual"
          subtitle="For myself"
          picture={individual}
        />

        <TherapyTypeCard
          title="Couples"
          subtitle="For me and my partner"
          picture={couples}
        />

        <TherapyTypeCard title="Teen" subtitle="My child" picture={teen} />
      </div>
    </div>
  );
};

export default TherapyType;
