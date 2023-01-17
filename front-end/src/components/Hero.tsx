import { useTypewriter } from "react-simple-typewriter";
import microscope from "../assets/microscope.jpg";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "door to door blood sample collection service",
      "Call for Doctor's Appointment",
      "Different types of Blood tests available",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <main className="py-6 flex justify-center items-center">
      <div className="flex flex-col w-3/5 h-3/5 items-center">
        <h1 className="text-darkGreen text-6xl tracking-wide">Regular tests</h1>
        <p className="text-white py-2 text-lg">{text}</p>
      </div>
      <img
        className="max-w-3xl rounded-2xl text-center hover:shadow-md"
        src={microscope}
        alt="microscope"
      />
    </main>
  );
};

export default Hero;
