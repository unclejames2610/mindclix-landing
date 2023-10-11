import Image from "next/image";
import React, { FC, SVGProps } from "react";
import ButtonNoFill from "./ButtonNoFill";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface TherapyTypeCardProps {
  picture: StaticImport;
  title: string;
  subtitle: string;
}

const TherapyTypeCard: FC<TherapyTypeCardProps> = ({
  picture,
  title,
  subtitle,
}) => {
  return (
    <div className="relative h-full w-full">
      <div className="flex flex-col px-4 py-10 bg-white shadow-md rounded gap-5 absolute -right-24 top-1/2 transform -translate-y-1/2 z-10 w-[175px]">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-black text-3xl">{title}</h1>
          <p className="text-black text-lg leading-[21.6px]">{subtitle}</p>
        </div>

        <button className="rounded-[6px] p-2.5 border bg-transparent border-dark-blue text-dark-blue w-[131.51px] h-[41.88px] text-base leading-[19.2px] ">
          Learn more
        </button>
      </div>
      <div className="relative flex items-center w-[275.58px] h-[318.3px] rounded">
        <Image
          src={picture}
          alt={`${picture}`}
          fill={true}
          sizes="100%"
          className="object-contain rounded"
        />
      </div>
    </div>
  );
};

export default TherapyTypeCard;
