import { useSelector } from "react-redux";
import aboutMe from "../assets/About Me-Potrait.jpg";
import {
  LinkIcon,
  CheckCircleIcon,
  ForwardIcon,
} from "@heroicons/react/24/solid";
const About = () => {
  const borderClr = useSelector((store) => store.theme.theme);
  return (
    <div
      id="about"
      className="-mt-[35%] md:-mt-[10%] w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-3 scroll-m-25 md:scroll-m-0 min-h-screen"
    >
      <div className="md:w-8/12 flex flex-col md:flex-row gap-10 items-center">
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute w-70 md:w-100 h-70 md:h-100 rounded-full border-2 border-amber-500 shadow-md animate-[spin_10s_linear_infinite]">
            <div className="absolute w-4 h-4 bg-amber-500 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <img
            className="w-60 md:w-90 rounded-full object-cover"
            src={aboutMe}
            alt=""
          />
        </div>

        <div className="w-full md:w-5/12 flex flex-col gap-2 border-2 border-amber-500  shadow-md p-2 rounded-2xl">
          <h1 className="font-medium text-amber-500">Digital Presence</h1>
          <a
            href="https://www.linkedin.com/in/yaswanth-sk"
            target="blank"
            className="flex justify-between border-2 border-amber-500 rounded-lg p-2"
          >
            <LinkIcon className="w-6 h-6 border-2 bg-amber-500  rounded-full" />
            <span className="text-amber-500 font-medium">Linked In</span>
          </a>
          <a
            href="https://github.com/Yashwanth-CH-27"
            target="blank"
            className="flex justify-between border-2 border-amber-500 rounded-lg p-2"
          >
            <LinkIcon className="w-6 h-6 border-2 bg-amber-500  rounded-full" />
            <span className="text-amber-500 font-medium">Git Hub</span>
          </a>
        </div>
        <div></div>
      </div>
      <div className="w-full md:w-6/12 flex items-center">
        <div
          className={`flex flex-col gap-7 rounded-2xl p-4 shadow-lg ${
            borderClr ? "border border-gray-700" : "border border-gray-200"
          }`}
        >
          <h1 className="font-bold text-2xl flex items-center justify-center gap-1 w-fit">
            <ForwardIcon className="w-5 h-5" />
            About Me
          </h1>
          <p className="md:text-justify">
            I am a Computer Science Engineering graduate (2023) with a strong
            foundation in frontend development, UI/UX, and scalable web
            solutions. Proficient in React JS, JavaScript, Tailwind CSS, and API
            integration, I specialize in crafting interactive and
            high-performance web applications.
          </p>
          <p className="md:text-justify -mt-2">
            In addition to front-end development, I hold PEGA CSA & CSSA
            certifications, showcasing my expertise in building low-code
            enterprise applications. My technical skills, problem-solving
            mindset, and dedication to continuous learning allow me to adapt
            quickly to new challenges.
          </p>
          <div>
            <span className="p-2 font-medium border-2 border-amber-500 text-amber-500 rounded-2xl flex items-center gap-3 w-fit">
              <CheckCircleIcon className="w-5 h-5" /> Available For Work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
