import { useSelector } from "react-redux";

const Footer = () => {
  const borderClr = useSelector((store) => store.theme.theme);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        borderClr ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-gray-100"
      } w-full py-4 md:py-5 flex items-center justify-center`}
    >
      <p className="text-xs sm:text-sm text-center px-4">
        © {currentYear} Dhanush. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
