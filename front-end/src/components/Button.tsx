type Props = {
  label: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ label, onClick }: Props) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
