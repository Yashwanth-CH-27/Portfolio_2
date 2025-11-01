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
  { name: "Python", progress: 80 },
  { name: "SQL", progress: 75 },
  { name: "Data Analytics", progress: 85 },
  { name: "ETL & Data Pipelines", progress: 90 },
  { name: "Cloud Computing (AWS)", progress: 85 },
  { name: "Docker", progress: 70 },
  { name: "Power BI", progress: 65 },
  { name: "Tableau", progress: 55 },
];

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
      </div>  
    </div>
  );
};

export default Skills;
