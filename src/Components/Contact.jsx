import { ForwardIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const Contact = () => {
  const borderClr = useSelector((store) => store.theme.theme);
  return (
    <div id="contact" className="w-10/12 md:w-6/12 mx-auto min-h-screen py-10 scroll-m-25">
        <div className={`rounded-2xl p-4 shadow-lg ${borderClr ? "border border-gray-700" : "border border-gray-200" }`}>
        <h1 className="flex items-center gap-2 text-2xl font-bold mb-5">
        <span className="h-5 w-5">
          <ForwardIcon />
        </span>
        Contact
      </h1>
      <form
        action="https://formspree.io/f/xwplrqly"
        method="POST"
        className="flex flex-col gap-10 p-2"
      >
        <div
          className={`rounded-2xl p-2 shadow-md ${
            borderClr ? "border border-gray-700" : "border border-gray-200"
          }`}
        >
          Your Name:{" "}
          <input
            className="w-10/12 mx-1 outline-none p-2"
            type="text"
            placeholder="Enter your name"
            name="name"
          ></input>
        </div>
        <div
          className={`rounded-2xl p-2 shadow-md ${
            borderClr ? "border border-gray-700" : "border border-gray-200"
          }`}
        >
          Your Email:
          <input
            className="w-10/12 mx-1 outline-none p-2"
            type="email"
            placeholder="Enter your email"
            name="email"
          ></input>
        </div>
        <div
          className={`flex rounded-2xl p-2 shadow-md ${
            borderClr ? "border border-gray-700" : "border border-gray-200"
          }`}
        >
          Message:
          <textarea
            className="w-10/12 h-20 outline-none mx-3"
            type="text"
            placeholder="Enter your Message"
            name="message"
          ></textarea>
        </div>
        <button
          className={`bg-amber-500 rounded-2xl p-2 shadow-md ${
            borderClr ? "border border-gray-700" : "border border-gray-200"
          }`}
        >
          Send
        </button>
      </form>
        </div>

    </div>
  );
};

export default Contact;
