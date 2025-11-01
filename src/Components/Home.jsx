import React from "react";
import TypingEffect from "./TypingEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import profilePic from "../assets/Ghibli.png";

const Home = () => {
  const string =  [
    "Data Analytics Engineer by skill",
    "Problem Solver by mindset",
    "Learner for life",
  ]
  return (
    <div id="home" className="mx-5 md:mx-45 flex flex-col md:flex-row gap-10 md:gap-50 items-center scroll-m-30 min-h-screen pt-35 pb-55">
      <div className="relative flex justify-center items-center w-80 md:w-115 h-80 md:h-115 md:my-5">
        <div className="absolute w-90 md:w-130 h-90 md:h-130 border-2 border-amber-500 shadow-md rounded-full animate-[spin_10s_linear_infinite]">
          <div className="absolute w-4 h-4 bg-amber-500 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <img
          className="w-full h-full rounded-full object-cover"
          src={profilePic}
          alt="profile-potrait"
        />
      </div>
      <div>
        <div className="">
          <div className="text-4xl md:text-6xl">
            <h2>My Name is</h2>
            <h1 className="font-bold my-4">Appala Dhanush Balireddy</h1>
            <h1 className="flex font-bold text-2xl items-center my-2 md:my-7">I'm a <TypingEffect string={string}/></h1>
          </div>
          <p className="font-bold">
            "Passionate about turning raw data into impactful, real-time intelligence."
          </p>
          <div className="my-7">
            <a
              href="/public/Dhanush_Portfolio.pdf"
              download={"Dhanush-Resume"}
              className="border-2 border-amber-500 shadow-md text-amber-500 font-medium p-2 rounded-lg flex items-center space-x-2 w-fit"
            >
              <span>Download CV</span>
              <ArrowDownTrayIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
