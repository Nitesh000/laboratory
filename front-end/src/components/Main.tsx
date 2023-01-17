import Contact from "./Contact";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Services from "./Services";

const Main = () => {
  return (
    <section>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Pricing */}
      <Pricing />

      {/* Contact */}
      <div id="contact">
        {" "}
        <Contact />{" "}
      </div>
    </section>
  );
};

export default Main;
