"use client";
import { useState } from "react";
import Button from "./Button";
const AddCart = () => {
  const [count, setCount] = useState<number>(1);
  const handleValueIncrement = () => {
    if (count >= 10) {
      return;
    }
    setCount((value) => value + 1);
  };

  const handleValueDecrement = () => {
    if (count <= 1) {
      return;
    }
    setCount((value) => value - 1);
  };
  return (
    <div className="flex w-full justify-start items-center gap-4 mt-8">
      <div className="flex items-center gap-5 text-black font-Manrope">
        <span
          className="opacity-50 cursor-pointer"
          onClick={handleValueDecrement}
        >
          -
        </span>
        <span className=" text-[13px] font-bold tracking-[1px] uppercase w-[15px] text-center">
          {count}
        </span>
        <span
          className="opacity-50 cursor-pointer"
          onClick={handleValueIncrement}
        >
          +
        </span>
      </div>
      <Button name="ADD TO CART" />
    </div>
  );
};

export default AddCart;
