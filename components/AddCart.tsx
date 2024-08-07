"use client";
import { useState } from "react";
import CustomButton from "./CustomButton";

type SubmitTypes = {
  image: string;
  title: string;
  price: number;
  id: number;
};

const AddCart = ({ image, title, price, id }: SubmitTypes) => {
  const [count, setCount] = useState<number>(1);
  const [cartItems, setCartItems] = useState([
    {
      id: 0,
      image: "",
      title: "",
      price: 0,
      count: 0,
    },
  ]);

  // Increasing values
  const handleValueIncrement = () => {
    if (count >= 10) {
      return;
    }
    setCount((value: number) => value + 1);
  };

  // Decreasing values
  const handleValueDecrement = () => {
    if (count <= 1) {
      return;
    }
    setCount((value: number) => value - 1);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCartItems = [
      {
        id: id,
        image: image,
        title: title,
        price: price,
        count: count,
      },
    ];
    setCartItems(newCartItems);
    // setting in localstorage
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
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
        <span className="text-[13px] font-bold tracking-[1px] uppercase w-[15px] text-center">
          {count}
        </span>
        <span
          className="opacity-50 cursor-pointer"
          onClick={handleValueIncrement}
        >
          +
        </span>
      </div>
      <CustomButton name="ADD TO CART" onClick={handleAddToCart} />
    </div>
  );
};

export default AddCart;