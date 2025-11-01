import { useSelector } from "react-redux";

const Footer = () => {
    const borderClr = useSelector(store => store.theme.theme)
    return (
      <footer className={`${borderClr ?"bg-gray-600" : "bg-gray-800 text-white"} h-20 flex items-center justify-center`}>
        <p className="text-sm">© 2025 Yash. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  