import React from "react";
import TypingEffect from "./TypingEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import profilePic from "../assets/Ghibli.png";

const Home = () => {
  const string = [
    "Data Analytics Engineer by skill",
    "Problem Solver by mindset",
    "Learner for life",
  ];

  return (
    <div
      id="home"
      className="px-5 md:px-20 lg:px-40 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 min-h-screen pt-20 pb-28"
    >
      {/* TEXT SECTION */}
      <div className="text-center md:text-left w-full md:w-6/12">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <h2>My Name is</h2>
          <h1 className="font-bold my-4">Appala Dhanush Balireddy</h1>

          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl flex justify-center md:justify-start items-center gap-2 my-4 md:my-7">
            I'm a <TypingEffect string={string} />
          </h1>
        </div>

        <p className="font-semibold text-sm sm:text-base md:text-lg mt-2">
          "Passionate about turning raw data into impactful, real-time intelligence."
        </p>

        <div className="mt-7 flex justify-center md:justify-start">
          <a
            href="/public/Dhanush_Portfolio.pdf"
            download={"Dhanush-Resume"}
            className="border-2 border-amber-500 shadow-md text-amber-500 font-medium px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-amber-500 hover:text-white transition-all"
          >
            <span>Download CV</span>
            <ArrowDownTrayIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-8/12 sm:w-6/12 md:w-5/12 lg:w-4/12">
        <img
          className="rounded-full object-fill w-full aspect-square shadow-lg"
          src={profilePic}
          alt="profile-potrait"
        />
      </div>
    </div>
  );
};

export default Home;
