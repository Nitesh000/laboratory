// type Props = {
//   isLoggedIn : boolean;
// }

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex justify-between bg-[#61876E] shadow-xl rounded-md sticky top-0"
    >
      <h1 className="text-2xl font-bold px-4 py-3 text-pale hover:text-lightGreen/80 hover:font-semibold">
        N.C. Diagnosis
      </h1>
      <div className="px-4 py-3 flex flex-row gap-1">
        <button className="bg-pale px-2 py-1 rounded-lg hover:bg-pale/70 text-darkGreen hover:text-mediumGreen">
          Login
        </button>
        <NavLink
          to="/about"
          className={`px-2 py-1 text-[#fff] hover:text-pale`}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="px-2 py-1 text-[#fff] hover:text-pale"
        >
          Contact us
        </NavLink>
      </div>
    </motion.header>
  );
};

export default Header;
