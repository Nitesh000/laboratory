import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const About = () => {
  const navigate = useNavigate();
  const linkClickHandler = () => {
    navigate("/pricing");
  };
  return (
    <React.Fragment>
      <Header location="about" />
      <section className="max-w-7xl mb-2 h-screen">
        <div className="flex justify-center items-center h-28">
          <h3 className="tracking-wider text-darkGreen text-2xl hover:underline hover:decoration-darkGreen hover:cursor-pointer">
            About
          </h3>
        </div>
        <div className="max-w-3xl text-center mx-auto pt-16 text-green-800">
          This is all about a laoratory present in the Fetilizer Township,
          Rourkela-43, Odisha, India. Here we do all type of blood tests and
          other tests also. You can see all the pricing of the tests{" "}
          <a
            onClick={linkClickHandler}
            className="text-blue-500 hover:underline"
          >
            here
          </a>
          . We also have a MBBS doctor who is available 24/7. You can contact
          him by calling us on the number given below. If you want you can talk
          to them through us. We will also be able to help you get an early
          appointment from the doctor. If you want any general suggestion from a
          medical prospective then we are also able to give you as a full fleged
          Nurse. And if you are from a local area then we are also provide some
          home service of the blood sample collection and other thing but there
          will be extra chage for that.
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
