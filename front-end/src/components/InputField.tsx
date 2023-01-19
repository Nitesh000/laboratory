type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <div className="grid grid-cols-2 items-center gap-3 py-2 px-4">
      <label
        className="text-center hover:cursor-pointer focus:outline-none focus:border-none focus:ring-1"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
