import Image from "next/image";
import React from "react";
import userIcon from "@/public/userIcon.svg";
import userGroupIcon from "@/public/userGroupIcon.svg";
import calendarIcon from "@/public/calendarIcon.svg";
import gearIcon from "@/public/gearIcon.svg";
import GridCard from "../GridCard";

const HowItWorks = () => {
  return (
    <div className="flex flex-col p-4 py-10 mx-auto items-center justify-center bg-pale-blue ">
      <h1 className="font-bold text-[55px] leading-[66px] text-black">
        How it works
      </h1>
      <div className="grid grid-cols-4 gap-8 p-4 py-10">
        <GridCard
          icon={userIcon}
          title="Sign Up"
          subtitle="Download app, register & personalize your experience"
        />
        <GridCard
          icon={userGroupIcon}
          title="Find your therapist"
          subtitle="Browse trusted psychologists, choose your perfect match"
        />
        <GridCard
          icon={calendarIcon}
          title="Schedule your session"
          subtitle="Book your appointment and attend your virtual therapy session"
        />

        <GridCard
          icon={gearIcon}
          title="Grow and thrive"
          subtitle="Access resources, set goals and track your progress"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
