"use client";
import Image from "next/image";
import React, { FC } from "react";
import logo from "@/public/logo.svg";
import ButtonFill from "./ButtonFill";
import ButtonNoFill from "./ButtonNoFill";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between mx-auto py-4 px-10 bg-lime">
      {/* logo */}
      <div>
        <div className="relative h-[40px] w-[165px] flex items-center">
          <Image
            src={logo}
            alt="logo"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* nav items */}
      <div className="flex items-center gap-[61px]">
        <p className="text-lg leading-[23.29px] font-ptSans">Product</p>
        <p className="text-lg leading-[23.29px] font-ptSans">How it Works</p>
        <p className="text-lg leading-[23.29px] font-ptSans">Benefits</p>
        <ButtonFill text="Login" />
        <ButtonNoFill text="Sign up" />
      </div>
    </nav>
  );
};

export default Navbar;
