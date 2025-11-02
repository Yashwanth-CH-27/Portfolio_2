import React, { useEffect, useRef, useState } from "react";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const SkillsAnimations = ({ name, progress, visible }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="font-medium text-sm md:text-base">{name}</p>

      {/* Percentage Text */}
      <div className="w-full h-2 relative">
        <span
          className="absolute -top-6 right-0 text-xs md:text-sm transition-opacity duration-700"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {progress}%
        </span>

        {/* Progress Bar Background */}
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
          {/* Animated Bar */}
          <div
            className="h-2 bg-amber-500 transition-all duration-1000 ease-out"
            style={{ width: visible ? `${progress}%` : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const borderClr = useSelector((store) => store.theme.theme);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
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
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen w-11/12 md:w-10/12 mx-auto pt-20 md:pt-32 scroll-mt-24"
    >
      <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
        <ForwardIcon className="h-6 w-6" /> Skills
      </h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-[1.02] ${
              borderClr ? "border border-gray-700" : "border border-gray-200"
            }`}
          >
            <SkillsAnimations
              name={skill.name}
              progress={skill.progress}
              visible={isVisible}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
