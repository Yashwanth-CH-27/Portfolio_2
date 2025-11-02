import { ForwardIcon } from "@heroicons/react/24/solid";
import { launchHostDes, tpsDes } from "../utils/constants";
import LaunchHost from "../assets/LaunchHost.png";
import TPS from "../assets/TPS.png";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProjectStructure = ({ name, description, image, tech, type }) => {
  const [isExpand, setIsExpand] = useState(false);
  const maxLength = 150;
  const borderClr = useSelector((store) => store.theme.theme);

  return (
    <div
      className={`rounded-xl p-5 shadow-md w-full transition-all duration-300 hover:scale-[1.01] ${
        borderClr ? "border border-gray-800" : "border border-gray-200"
      }`}
    >
      <h1 className="font-bold text-lg md:text-xl">{name}</h1>

      <p className="text-justify text-sm md:text-base mt-2 leading-relaxed">
        {isExpand ? description : `${description.slice(0, maxLength)}...`}
        {description.length > maxLength && (
          <button
            className="ml-1 font-semibold text-amber-500 text-sm md:text-base"
            onClick={() => setIsExpand(!isExpand)}
          >
            {isExpand ? "Read Less" : "Read More"}
          </button>
        )}
      </p>

      {/* Image + Info Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-5 items-center md:items-start">
        <img
          className="rounded-lg object-cover h-40 w-full md:h-44 md:w-60 lg:w-72 transition-transform duration-500 hover:rotate-3"
          src={image}
          alt={name}
        />

        <div className="flex flex-col gap-2 text-sm md:text-base w-full md:w-auto">
          <p>
            <span className="font-bold">TechStack: </span>
            {tech}
          </p>
          <p>
            <span className="font-bold">Type: </span>
            {type}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectArr = [
    {
      name: "Launch Host – Scalable Cloud Hosting Platform",
      description: launchHostDes,
      image: LaunchHost,
      tech: "JavaScript, Next.js, Docker, AWS ECS, AWS S3, CDN, Kafka, Redis, ClickHouse, Nginx",
      type: "Cloud",
    },
    {
      name: "AI-Driven Transaction Processing System",
      description: tpsDes,
      image: TPS,
      tech: "Python, AWS DynamoDB, OpenAI API, OCR Models, AWS Lambda, Node.js",
      type: "FinTech",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-14 w-11/12 md:w-10/12 mx-auto scroll-mt-24"
    >
      <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-bold mb-8">
        <ForwardIcon className="h-6 w-6" />
        Projects
      </h1>

      <div className="flex flex-col gap-10">
        {projectArr.map((project) => (
          <ProjectStructure key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
