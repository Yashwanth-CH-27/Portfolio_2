import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { addToggleFeature } from "../utils/themeSlice";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, Bars3Icon } from "@heroicons/react/24/solid";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((store) => store.theme.theme);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect( () => {
    const handleScroll = () =>{
      if(isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll",handleScroll)
  }, [isOpen]);

  const handleToggle = () => {
    dispatch(addToggleFeature());
  };
  return (
    <div
      className={`fixed top-0 left-0  shadow-md backdrop-blur-3xl z-1000 w-screen flex justify-between border px-3 py-2 rounded-lg items-center ${
        darkMode
          ? "border-gray-800 bg-white/1"
          : "border-gray-300 bg-gray-300/10"
      }`}
    >
      <div className="flex items-center gap-3">
        <div>
          <img className="w-15 object-cover rounded-[50%]" src={logo} alt="" />
        </div>
        <div>
          <h1 className="font-bold">Dhanush</h1>
        </div>
      </div>

      <div className="flex gap-4 items-center">
      <div>
      <button onClick={()=>{setIsOpen(!isOpen)}} className="md:hidden">
            <Bars3Icon className="w-5 h-5"/>
        </button>
      </div>
        <nav className={`absolute md:static text-[14px] md:text-[15px] ${isOpen ? "top-20 right-1" : "-top-[500px]"}`}>
          <div
            className={`flex flex-col md:flex-row border p-2 rounded-lg ${
              darkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"
            }`}
          >
            <a
              href="#home"
              className={`no-underline border-b md:border-b-0 md:border-r px-1 md:px-5 py-1 md:py-0 text-center ${
                darkMode ? "border-gray-600" : "border-gray-400"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`no-underline border-b md:border-b-0 md:border-r px-1 md:px-5 py-1 md:py-0 text-center ${
                darkMode ? "border-gray-600" : "border-gray-400"
              }`}
            >
              About Me
            </a>
            <a
              href="#skills"
              className={`no-underline border-b md:border-b-0 md:border-r px-1 md:px-5 py-1 md:py-0 text-center ${
                darkMode ? "border-gray-600" : "border-gray-400"
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`no-underline border-b md:border-b-0 md:border-r px-1 md:px-5 py-1 md:py-0 text-center ${
                darkMode ? "border-gray-600" : "border-gray-400"
              }`}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={`no-underline border-b md:border-b-0 md:border-r px-1 md:px-5 py-1 md:py-0 text-center ${
                darkMode ? "border-gray-600" : "border-gray-400"
              }`}
            >
              Experience
            </a>
            <a href="#contact" className="no-underline px-1 md:px-5 py-1 md:py-0 text-center">
              Contact
            </a>
          </div>
        </nav>
        <div>
          <button
            className={`border border-gray-300 px-2 py-1 rounded-lg ${
              darkMode ? "border-gray-800" : "border-gray-300"
            }`}
            onClick={handleToggle}
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
