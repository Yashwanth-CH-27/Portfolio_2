import { useSelector } from "react-redux";
import { researchAssitant, sde, universityDes, universityLogo, lamproDes } from "../utils/constants";
import SDElogo from "../assets/SoftwareEngineer.png";
import { ForwardIcon } from "@heroicons/react/24/solid";

const experienceData = [
  {
    company: "George Mason University (GMU)",
    logo: universityLogo,
    role: "Systems Engineer",
    type: "Academic Research",
    description: researchAssitant,
    about: universityDes,
  },
  {
    company: "Lampro Tech LLP",
    logo: SDElogo,
    role: "Intern",
    type: "Cloud-Native Software Engineering",
    description: sde,
    about: lamproDes,
  },
];

const Experience = () => {
  const borderClr = useSelector((store) => store.theme.theme);

  return (
    <section id="experience" className="w-11/12 md:w-10/12 mx-auto min-h-screen py-10 scroll-m-28">
      <h1 className="flex items-center gap-2 text-2xl font-bold mb-8">
        <span className="h-5 w-5">
          <ForwardIcon />
        </span>
        Experience
      </h1>

      <div className="flex flex-col gap-12">
        {experienceData.map((exp, index) => (
          <div key={index} className="flex flex-col gap-6 items-center">
            
            {/* Main Card */}
            <div
              className={`flex flex-col lg:flex-row gap-6 items-center w-full rounded-lg p-5 shadow-lg
              ${borderClr ? "border border-gray-800" : "border border-gray-200"}`}
            >
              <div className="w-full lg:w-4/12 flex justify-center">
                <img
                  className="w-full max-h-48 md:max-h-60 object-contain"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                />
              </div>

              <div className="w-full">
                <h2 className="font-bold text-xl mb-3">{exp.company}</h2>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  {exp.about}
                </p>
              </div>
            </div>

            {/* Role Card */}
            <div
              className={`flex flex-col gap-2 w-full rounded-lg p-5 shadow-lg
              ${borderClr ? "border border-gray-800" : "border border-gray-200"}`}
            >
              <p><span className="font-bold">Role:</span> {exp.role}</p>
              <p><span className="font-bold">Type:</span> {exp.type}</p>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                {exp.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
