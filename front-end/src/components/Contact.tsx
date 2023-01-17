const Contact = () => {
  const contactDetails = [
    {
      title: "Address: ",
      details: "Rourkela-43, Assurchapal, police station",
    },
    {
      title: "Phone: ",
      details: "+91 1234567890",
    },
    {
      title: "Email: ",
      details: "email@email.com",
    },
    {
      title: "WhatsApp: ",
      details: "+91 1234567890",
    },
  ];
  return (
    <section className="max-w-7xl h-screen py-10 ">
      <div className="flex justify-center items-center h-28">
        <h3 className="tracking-wider text-darkGreen text-2xl hover:underline hover:decoration-darkGreen hover:cursor-pointer">
          Contact
        </h3>
      </div>
      <div className="text-center mt-32">
        {contactDetails.map((contact) => (
          <div>
            {" "}
            <h4 className="inline text-darkGreen text-lg">{contact.title} </h4>
            <h5 className="inline text-pale text-md">{contact.details}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
