type Props = {
  head?: String;
  para?: String;
};

const ServicesCard = ({ head, para }: Props) => {
  return (
    <div>
      <div className="max-w-sm p-6 bg-mediumGreen h-64 border border-pale rounded-lg shadow-md flex flex-col justify-center items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-pale">
          {head}
        </h5>
        <p className="mb-3 font-normal text-white">{para}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
