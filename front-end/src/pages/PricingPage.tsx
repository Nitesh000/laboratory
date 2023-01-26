import React, { useEffect, useState } from "react";
import Header from "../components/Header";

type TestsTypes = {
  _id: string;
  test: string;
  price: number;
};

type PricingType = {
  _id: string;
  name: string;
  tests: [TestsTypes];
};

const PricingPagae = () => {
  const [data, setData] = useState<PricingType[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await fetch("http://localhost:3000/pricing");
      const json = await data.json();
      setData(json);
    };
    dataFetch();
    return () => {
      setData([]);
    };
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <Header location="Pricing" />
      <section className="max-w-7xl mb-2">
        <div className="flex justify-center items-center h-28">
          <h3 className="tracking-wider text-darkGreen text-2xl hover:underline hover:decoration-darkGreen hover:cursor-pointer">
            Pricing
          </h3>
        </div>
        <div className="flex ">
          {data.map((item: PricingType) => {
            return (
              <div key={item._id} className="px-10">
                <h1 className="tracking-wider text-darkGreen text-xl text-center mb-2 hover:underline hover:decoration-pale hover:cursor-pointer">
                  {item.name}
                </h1>
                <table className="w-1/2 inline text-sm text-left text-gray-500 rounded-2xl">
                  <thead className="text-xs text-gray-700 uppercase bg-darkGreen/40">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name of the test
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.tests.map((test: TestsTypes, i) => {
                      return (
                        <tr key={i} className="bg-pale border-b ">
                          <td className="px-6 py-4">{test.test}</td>
                          <td className="px-6 py-4">{`₹${test.price}`}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PricingPagae;
