import { ForwardIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const Contact = () => {
  const borderClr = useSelector((store) => store.theme.theme);
  return (
    <div id="contact" className="w-10/12 md:w-6/12 mx-auto h-[500px] mt-5 py-10 scroll-m-25">
        <div className={`rounded-2xl p-4 shadow-lg ${borderClr ? "border border-gray-700" : "border border-gray-200" }`}>
        <h1 className="flex items-center gap-2 text-2xl font-bold mb-5 justify-center">
        <span className="h-5 w-5">
          <ForwardIcon />
        </span>
        Contact Me
      </h1>
      <div className="flex flex-col gap-4 text-center">
      <h1 className="font-bold">Email: <span className="font-normal">abalired@gmu.edu</span></h1>
      <h1 className="font-bold">Linked In: <span className="font-normal">http://linkedin.com/in/dhanush-balireddy</span></h1>
      </div>
        </div>

    </div>
  );
};

export default Contact;
