import { useSelector } from "react-redux";
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
      className="w-11/12 md:w-10/12 mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center min-h-screen pt-24 pb-20 scroll-mt-24"
    >
      {/* LEFT SECTION - ABOUT TEXT */}
      <div className="w-full lg:w-8/12">
        <div
          className={`flex flex-col gap-7 rounded-2xl p-6 shadow-lg ${
            borderClr ? "border border-gray-700" : "border border-gray-200"
          }`}
        >
          <h1 className="font-bold text-2xl flex items-center gap-2">
            <ForwardIcon className="w-6 h-6 text-amber-500" />
            About Me
          </h1>

          <p className="text-justify leading-relaxed">
            Hi, I’m <b>Appala Dhanush Balireddy</b>, a Data Analytics Engineering
            graduate student at George Mason University with hands-on experience in
            building scalable data pipelines, cloud-based systems, and AI-driven
            automation. I enjoy working at the intersection of data, cloud, and
            engineering, where I can turn complex datasets into real-time,
            high-performance solutions.
          </p>

          <p className="text-justify leading-relaxed">
            I’m passionate about designing systems that scale, automate, and deliver
            meaningful insights, whether through cloud infrastructure, data
            engineering, or machine learning integrations. I enjoy learning new
            technologies, contributing to communities, and solving problems that
            challenge both logic and creativity.
          </p>

          <div>
            <span className="px-3 py-2 font-medium border-2 border-amber-500 text-amber-500 rounded-2xl flex items-center gap-2 w-fit">
              <CheckCircleIcon className="w-5 h-5" /> Available For Work
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - DIGITAL PRESENCE */}
      <div className="w-full lg:w-4/12 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 border-2 border-amber-500 shadow-md p-4 rounded-2xl">
          <h1 className="font-semibold text-amber-500">Digital Presence</h1>

          <a
            href="https://linkedin.com/in/dhanush-balireddy"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center border-2 border-amber-500 rounded-lg p-2 hover:bg-amber-500 transition-all"
          >
            <LinkIcon className="w-6 h-6 text-amber-500 bg-white rounded-full p-1" />
            <span className="text-amber-500 font-medium group-hover:text-white">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
