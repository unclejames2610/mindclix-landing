import React from "react";
import image2 from "@/public/image2.svg";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="bg-white flex items-center p-4 py-20 justify-center gap-16">
      <div className="flex flex-col gap-2.5">
        <h1 className="font-bold text-[55px] leading-[66px]">Get started!</h1>
        <p className="text-lg w-[477px]">
          MindClix is out now. Click the button below to download the app.
        </p>
        <button className="rounded-[6px] p-2.5 border bg-dark-blue border-dark-blue text-white h-[50px] text-base leading-[19.2px] w-[200px] ">
          Start your sessions now
        </button>
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
    </div>
  );
};

export default GetStarted;
