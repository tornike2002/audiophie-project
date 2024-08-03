"use client";
import { useState } from "react";
import CustomButton from "./CustomButton";
type SubmitTypes = {
  image: string;
  title: string;
  price: number;
};
const AddCart = ({ image, title, price }: SubmitTypes) => {
  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:3000/api/product`, {
      method: "POST",
      body: JSON.stringify({
        image,
        title,
        price,
        count,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const [count, setCount] = useState<number>(1);
  //   increasing values
  const handleValueIncrement = () => {
    if (count >= 10) {
      return;
    }
    setCount((value: number) => value + 1);
  };
  // decreasing values
  const handleValueDecrement = () => {
    if (count <= 1) {
      return;
    }
    setCount((value: number) => value - 1);
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
      <CustomButton name="ADD TO CART" onClick={handleSubmit} />
    </div>
  );
};

export default AddCart;
