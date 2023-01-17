import ServicesCard from "./ServicesCard";

const Services = () => {
  const services = [
    {
      head: "Fast Response",
      para: "As soon as you approach us we will be start to do the work done",
    },
    {
      head: "Door to door approach",
      para: "If you are not able to come to the clinic we will be goint to home for sample collections",
    },
    {
      head: "Doctor's Appointment",
      para: "Four days in a week the doctor will be present on his clinic. And if you want to make your Appointment with them you can call us for the Appointment",
    },
  ];
  return (
    <section className="max-w-7xl h-screen py-20 ">
      <div className="flex justify-center items-center h-28">
        <h3 className="tracking-wider text-darkGreen text-2xl hover:underline hover:decoration-darkGreen hover:cursor-pointer">
          Services
        </h3>
      </div>
      <div className="h-3/4 max-w-5xl mx-auto grid grid-cols-3 gap-5 text-center py-20">
        {/* ServicesCard */}
        {services.map((service, i) => (
          <ServicesCard key={i} head={service.head} para={service.para} />
        ))}
      </div>
    </section>
  );
};

export default Services;
