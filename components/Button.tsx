import React from "react";
type ButtonTypes = {
  name: string;
};
const Button = ({ name }: ButtonTypes) => {
  return (
    <button
      type="button"
      className="bg-customYellow py-[15px] px-[31px] font-bold tracking-[1px]
     uppercase text-[13px]"
    >
      {name}
    </button>
  );
};

export default Button;
