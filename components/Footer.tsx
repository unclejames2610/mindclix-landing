import React from "react";
import greenLogo from "@/public/greenLogo.svg";
import Whatsapp from "@/public/Whatsapp.svg";
import Instagram from "@/public/Instagram.svg";
import Twitter from "@/public/Twitter.svg";
import Facebook from "@/public/Facebook.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-dark-blue p-4 px-12 mx-auto flex flex-col gap-6">
      <div className="flex justify-between border-b border-custom-white-three pb-20">
        {/* logo */}
        <div>
          <div className="relative h-[40px] w-[165px] flex items-center">
            <Image
              src={greenLogo}
              alt="logo"
              fill={true}
              sizes="100%"
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 text-white">
          <ul className="gap-2.5 flex flex-col">
            <li>Home</li>
            <li>Business</li>
            <li>About</li>
          </ul>

          <ul className="gap-2.5 flex flex-col">
            <li>FAQ</li>
            <li>Reviews</li>
            <li>Advice</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className="gap-2.5 flex flex-col">
            <li>Find a Therapist</li>
            <li>Contact</li>
            <li>For Therapists(Therapist portal)</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-2.5">
        <div className="relative flex items-center w-[25px] h-[25px] rounded-full">
          <Image
            src={Whatsapp}
            alt="whatsapp"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>

        <div className="relative flex items-center w-[25px] h-[25px] rounded-full">
          <Image
            src={Instagram}
            alt="Instagram"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>

        <div className="relative flex items-center w-[25px] h-[25px] rounded-full">
          <Image
            src={Twitter}
            alt="Twitter"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>

        <div className="relative flex items-center w-[25px] h-[25px] rounded-full">
          <Image
            src={Facebook}
            alt="Facebook"
            fill={true}
            sizes="100%"
            className="object-contain rounded-full"
          />
        </div>
      </div>

      <p className="text-xs leading-6 text-white">
        © 2023 MindClix. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
