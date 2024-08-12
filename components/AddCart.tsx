"use client";
import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

export type SubmitTypes = {
  image: string;
  title: string;
  price: number;
  id: number;
  count: number;
};

const AddCart = ({ image, title, price, id }: SubmitTypes) => {
  const [count, setCount] = useState<number>(1);
  const [cartItems, setCartItems] = useState<SubmitTypes[]>([]);
  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

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
    const newItem = {
      image: image,
      title: title,
      price: price,
      id: Math.random(),
      count: count,
    };

    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
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
