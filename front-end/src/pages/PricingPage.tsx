import React from "react";
import Header from "../components/Header";
import useFetch from "../components/hooks/useFetch";

const PricingPagae = () => {
  const pricingUrl = new URL("http://localhost:3000/pricing");
  const data = useFetch(pricingUrl);
  console.log(data);
  return (
    <React.Fragment>
      <Header location="Pricing" />
      <section className="max-w-7xl h-screen">
        <div className="flex justify-center items-center h-28">
          <h3 className="tracking-wider text-darkGreen text-2xl hover:underline hover:decoration-darkGreen hover:cursor-pointer">
            Pricing
          </h3>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PricingPagae;
