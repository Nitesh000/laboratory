const Pricing = () => {
  const pricingList = [
    {
      title: "MP - Card",
      price: 150,
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    {
      title: "Liver Function Test",
      price: 500,
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    {
      title: "Lipid Profile",
      price: 400,
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    {
      title: "Dengue",
      price: 600,
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
  ];
  type Pricing = {
    title?: string;
    price?: number;
    description?: string;
  };
  const PopularPricing = ({ title, price, description }: Pricing) => {
    return (
      <div className="max-w-sm p-6 bg-mediumGreen h-64 border border-pale rounded-lg shadow-md flex flex-col justify-center items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-pale">
          {`${title} (₹${price})`}
        </h5>
        <p className="mb-3 font-normal text-white">{description}</p>
      </div>
    );
  };
  return (
    <section className="max-w-7xl h-screen py-10 ">
      <div className="flex justify-center items-center h-28">
        <h3 className="tracking-wider text-darkGreen text-2xl hover:underline hover:decoration-darkGreen hover:cursor-pointer">
          Pricing
        </h3>
      </div>
      <div className="h-3/4 max-w-5xl mx-auto grid grid-cols-4 gap-10 text-center py-20">
        {/* Popular Pricing of test*/}
        {pricingList.map((pricing, i) => (
          <PopularPricing
            key={i}
            title={pricing.title}
            price={pricing.price}
            description={pricing.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
