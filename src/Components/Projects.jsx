import { ForwardIcon } from "@heroicons/react/24/solid";
import {
  netflixUrl,
  netflixDes,
  dineDashUrl,
  dineDashDes,
  portfolioUrl,
  portfolioDes,
  instaCloneUrl,
  instaCloneDes,
} from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProjectStructure = ({ name, description, image, tech, type }) => {
  const [isExpand, setIsExpand] = useState(false);
  const maxLength = 130;
  const borderClr = useSelector(store => store.theme.theme)
  return (
    <div>
      <div className={`rounded-lg p-4 shadow-lg ${borderClr ? "border border-gray-800" : "border border-gray-200" }`}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">{name}</h1>
            <p className="text-justify">
              {isExpand ? description : `${description.slice(0, maxLength)}...`}
              {description.length > maxLength && (
                <button
                  className="font-medium text-amber-500"
                  onClick={() => {
                    setIsExpand(!isExpand);
                  }}
                >
                  {isExpand ? ".Read Less" : "Read More"}
                </button>
              )}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img className="rounded-lg object-cover h-25 md:h-40 w-70 md:w-50 transition-transform duration-500 hover:rotate-12" src={image} alt="" />
            </div>
            <div className="flex flex-col md:gap-2">
              <span><span className="font-bold">TechStack: </span>{tech}</span>
              <span><span className="font-bold">Type: </span>{type}</span>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectArr = [
    {
      name: "Netflix-Groq",
      description: netflixDes,
      url: netflixUrl,
      tech: "React JS, JavaScript, JSX & Tailwind CSS",
      type: "Entertainment",
    },
    {
      name: "Dine-Dash(Swiggy Clone)",
      description: dineDashDes,
      url: dineDashUrl,
      tech: "React JS, JavaScript, JSX & Tailwind CSS",
      type: "Food-Delivery",
    },
    {
      name: "Portfolio",
      description: portfolioDes,
      url: portfolioUrl,
      tech: "React JS, JavaScript, JSX & Tailwind CSS",
      type: "Personal-Site",
    },
    {
      name: "Instagram Clone",
      description: instaCloneDes,
      url: instaCloneUrl,
      tech: "HTML5, CSS3, JavaScript",
      type: "Social Media",
    },
  ];
  return (
    <div id="projects" className="min-h-screen py-10 mx-auto  scroll-mt-20 w-10/12  md:mb-15">
      <h1 className="flex items-center gap-2 text-2xl font-bold mb-5">
        <span className="h-5 w-5">
          <ForwardIcon />
        </span>
        Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projectArr.map((project) => (
          <div key={project.name} className="">
            <ProjectStructure
              name={project.name}
              description={project.description}
              image={project.url}
              tech={project.tech}
              type={project.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
