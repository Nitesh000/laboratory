import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Services from "./Services";

const Main = () => {
  return (
    <React.Fragment>
      <Header location="main" />{" "}
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
      <Footer />
    </React.Fragment>
  );
};

export default Main;
