type ButtonTypes = {
  name: string;
  onClick?: () => void;
};
const CustomButton = ({ name, onClick }: ButtonTypes) => {
  return (
    <button
      type="button"
      className="bg-customYellow py-[15px] px-[31px] font-bold tracking-[1px]
     uppercase text-[13px]"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CustomButton;
