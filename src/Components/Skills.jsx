import React, { useEffect, useRef, useState } from "react";
import TypingEffect from "./TypingEffect";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const SkillsAnimations = ({ name, progress, visible }) => {
  return (
    <div className="flex flex-col">
      <p className="font-medium">{name}</p>
      <div className="overflow-hidden">
        <div
          className="mb-4 h-2 transition-all duration-1000 ease-out text-right"
          style={{ width: visible ? `${progress}%` : "0%" }}
        >
          {visible ? `${progress}%` : null}
        </div>
      </div>
      <div className="border h-2 overflow-hidden">
        <div
          className="bg-amber-500 h-2 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${progress}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const borderClr = useSelector(store => store.theme.theme)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const skills = [
    { name: "JavaScript", progress: 65 },
    { name: "React JS", progress: 60 },
    { name: "Tailwind CSS", progress: 80 },
    { name: "HTML5", progress: 95 },
    { name: "CSS3", progress: 90 },
    { name: "Python", progress: 75 },
    { name: "MySQL", progress: 60 },
    { name: "Pega", progress: 50 },
  ];
  const filteredList = skills.filter(
    (skill) =>
      skill.name === "JavaScript" ||
      skill.name === "React JS" ||
      skill.name === "Tailwind CSS" ||
      skill.name === "HTML5" ||
      skill.name === "CSS3"
  );

  const avgPercentage =
    filteredList.reduce((sum, skill) => sum + skill.progress, 0) /
    filteredList.length;

  // const dynamicDegree = 360 * (avgPercentage / 100);

  const skillNames = ["React JS", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"];

  return (
    <div id="skills" ref={sectionRef} className="min-h-screen mx-auto mt-[25%]  md:mt-0 scroll-m-25 w-10/12">
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        <span className="h-5 w-5">
          <ForwardIcon />
        </span>
        Skills
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 w-full md:w-8/12 flex-2">
          {skills.map((skill) => (
            <div key={skill.name} className= {`rounded-2xl p-4 shadow-lg ${borderClr ? "border border-gray-700" : "border border-gray-200" }`}>
              <SkillsAnimations
                name={skill.name}
                progress={skill.progress}
                visible={isVisible}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1 items-center">
          <div className="flex gap-2 items-end">
            <div className={`w-60 h-70 overflow-hidden flex items-end rounded-lg shadow-lg ${borderClr ? "border border-gray-500" : "border border-gray-300" }`}>
              <div
                className="w-60  bg-amber-500 transition-all duration-1000 ease-out"
                style={{ height: isVisible ? `${avgPercentage}%` : "0%" }}
              ></div>
            </div>
            <div
              className="h-70 transition-all duration-800 ease-in flex items-center"
              style={{ transform: isVisible ? `translateY(${avgPercentage - 100}%)` : "translateY(0%)" }}
            >
              {isVisible ? `${avgPercentage}%` : ""}
            </div>
          </div>
          <div>
            <h1 className="font-medium text-xl md:text-2xl my-5">
              "Front-End Web Development"
            </h1>
            <div className="font-normal text-xl flex items-center my-3">
              The % is Average of <TypingEffect string={skillNames} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
