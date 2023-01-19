type HeaderProp = {
  location: String;
};
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = ({ location }: HeaderProp) => {
  const navigate = useNavigate();
  const loginBtnHandler = () => {
    navigate("/login");
  };
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
        <button
          onClick={loginBtnHandler}
          className="bg-pale px-2 py-1 rounded-lg hover:bg-pale/70 text-darkGreen hover:text-mediumGreen"
        >
          {`${location == "login" ? "Sign Up" : "Login"}`}
        </button>
        <a href="/about" className={`px-2 py-1 text-[#fff] hover:text-pale`}>
          About
        </a>
        <a href="#contact" className="px-2 py-1 text-[#fff] hover:text-pale">
          Contact us
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
