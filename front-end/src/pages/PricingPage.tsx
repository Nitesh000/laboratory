import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const PricingPagae = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await fetch("http://localhost:3000/pricing");
      const json = await data.json();
      setData(json);
    };
    dataFetch();
    return () => {
      setData(null);
    };
  }, []);
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
