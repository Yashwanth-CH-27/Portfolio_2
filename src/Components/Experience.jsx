import { useSelector } from "react-redux";
import { virtusaLogoUrl, virtusaDes, expDes } from "../utils/constants";
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
      <div className="flex flex-col gap-5 justify-center items-center">
        <div
          className={`flex flex-col md:flex-row gap-5 justify-center items-center rounded-lg p-4 shadow-lg ${
            borderClr ? "border border-gray-800" : "border border-gray-200"
          }`}
        >
          <div className="md:w-4/12">
            <img className="w-full h-60 object-cover transition-transform duration-500 hover:rotate-12" src={virtusaLogoUrl} alt="" />
          </div>
          <div className="w-full">
            <p className="md:text-justify">{virtusaDes}</p>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 rounded-lg p-4 shadow-lg ${
            borderClr ? "border border-gray-800" : "border border-gray-200"
          }`}
        >
          <div>
            <h1>
              <span className="font-bold">Role: </span>Pega Developer
            </h1>
            <h2><span className="font-bold">Type: </span>Intern [Jan 2023 - Apr 2023]</h2>
            <h3 className="text-gray-500">Tamil Nadu, Chennai, Remote</h3>
          </div>
          <div>
            <p className="md:text-justify">
              {expDes}
            </p>
          </div>
          <div>
            <span className="font-bold">Skills used: </span><span>Pega CSA & Pega CSSA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
