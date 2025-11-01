import { useSelector } from "react-redux";
import { researchAssitant, sde, universityDes,universityLogo, lamproDes } from "../utils/constants";

import SDElogo from "../assets/SoftwareEngineer.png"
import { ForwardIcon } from "@heroicons/react/24/solid";

const Experience = () => {
  const borderClr = useSelector((store) => store.theme.theme);
  return (
    <div id="experience" className="w-10/12 mx-auto min-h-screen py-10 scroll-m-25">
      <h1 className="flex items-center gap-2 text-2xl font-bold mb-5">
        <span className="h-5 w-5">
          <ForwardIcon />
        </span>
        Experience
      </h1>
      <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div
          className={`flex flex-col md:flex-row gap-5 justify-center items-center rounded-lg p-4 shadow-lg ${
            borderClr ? "border border-gray-800" : "border border-gray-200"
          }`}
        >
          <div className="md:w-4/12">
            <img className="w-full h-full object-cover transition-transform duration-500 hover:rotate-12" src={universityLogo} alt="" />
          </div>
          <div className="w-full">
            <h1 className="font-bold mb-5">George Mason University (GMU) </h1>
            <p className="md:text-justify">{universityDes}</p>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 rounded-lg p-4 shadow-lg ${
            borderClr ? "border border-gray-800" : "border border-gray-200"
          }`}
        >
          <div>
            <h1>
              <span className="font-bold">Role: </span>Systems Engineer
            </h1>
            <h2><span className="font-bold">Type: </span>Academic Research</h2>
          </div>
          <div>
            <p className="md:text-justify">
              {researchAssitant}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div
          className={`flex flex-col md:flex-row gap-5 justify-center items-center rounded-lg p-4 shadow-lg ${
            borderClr ? "border border-gray-800" : "border border-gray-200"
          }`}
        >
          <div className="md:w-4/12">
            <img className="w-full h-full object-cover transition-transform duration-500 hover:rotate-12" src={SDElogo} alt="" />
          </div>
          <div className="w-full">
            <h1 className="font-bold mb-5">Lampro Tech LLP</h1>
            <p className="md:text-justify">{lamproDes}</p>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 rounded-lg p-4 shadow-lg ${
            borderClr ? "border border-gray-800" : "border border-gray-200"
          }`}
        >
          <div>
            <h1>
              <span className="font-bold">Role: </span>Intern
            </h1>
            <h2><span className="font-bold">Type: </span>Cloud-Native Software Engineering</h2>
          </div>
          <div>
            <p className="md:text-justify">
              {sde}
            </p>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Experience;
