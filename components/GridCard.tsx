import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { FC } from "react";

interface GridCardProps {
  icon: StaticImport;
  title: string;
  subtitle: string;
}

const GridCard: FC<GridCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col bg-white rounded-[10px] p-4 py-8 gap-5">
      {/* icon */}
      <div className="relative flex items-center w-[50px] h-[50px] rounded-full">
        <Image
          src={icon}
          alt="user icon"
          fill={true}
          sizes="100%"
          className="object-contain rounded-full"
        />
      </div>
      <p className="text-2xl leading-[28.8px]">{title}</p>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default GridCard;
