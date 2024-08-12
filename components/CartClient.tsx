"use client";
import { useState, useEffect } from "react";
import CartIcon from "../public/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { Modal } from "antd";
import { SubmitTypes } from "./AddCart";
import CustomButton from "./CustomButton";

const CartClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartData, setCartData] = useState<SubmitTypes[]>([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartData(JSON.parse(cartItems));
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Increasing values
  const handleValueIncrement = (id: number) => {
    setCartData((prevCartData) => {
      const updatedCartData = prevCartData.map((item) =>
        item.id === id && item.count < 10
          ? { ...item, count: item.count + 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartData));
      return updatedCartData;
    });
  };

  // Decreasing values
  const handleValueDecrement = (id: number) => {
    setCartData((prevCartData) => {
      const updatedCartData = prevCartData.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartData));
      return updatedCartData;
    });
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartData.reduce((total, item) => total + item.price * item.count, 0);
  };

  // Remove all items
  const handleRemoveAll = () => {
    setCartData([]);
    localStorage.removeItem("cartItems");
  };
  // make a function to add total price in local storage
  const totalPriceLocalStorage = () => {
    localStorage.setItem("totalPrice", JSON.stringify(calculateTotalPrice()));
  };

  return (
    <div>
      <Image
        src={CartIcon}
        alt="Cart"
        className="cursor-pointer"
        onClick={showModal}
      />
      {/* modal */}
      <Modal
        title={`Cart (${cartData.length})`}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col gap-10">
          {cartData.map((item: SubmitTypes) => {
            return (
              <div key={item.id} className="flex items-center justify-between">
                <Image src={item.image} alt="Product" width={64} height={64} />
                <div className="flex flex-col gap-1 flex-start items-start w-[140px]">
                  <p className="font-Manrope text-black text-[15px] font-bold leading-6">
                    {item.title}
                  </p>
                  <p className="font-Manrope text-black text-[14px] font-bold leading-6 opacity-50">
                    ${item.price}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-5 text-black font-Manrope">
                    <span
                      className="opacity-50 cursor-pointer"
                      onClick={() => handleValueDecrement(item.id)}
                    >
                      -
                    </span>
                    <span className="text-[13px] font-bold tracking-[1px] uppercase w-[15px] text-center">
                      {item.count}
                    </span>
                    <span
                      className="opacity-50 cursor-pointer"
                      onClick={() => handleValueIncrement(item.id)}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 justify-end mt-4">
          <p className="font-Manrope text-black text-[15px] font-bold leading-6 flex justify-between items-center">
            <span className="font-Manrope text-black text-[14px] font-bold leading-6 opacity-50">
              Total:
            </span>
            ${calculateTotalPrice().toFixed(0)}
          </p>
          <button
            type="button"
            onClick={totalPriceLocalStorage}
            className="bg-customYellow text-white w-full border-0 py-3 uppercase tracking-[1.5px]"
          >
            Checkout
          </button>
          <button
            type="button"
            className="bg-red-500 text-white w-full border-0 py-3 uppercase tracking-[1.5px]"
            onClick={handleRemoveAll}
          >
            Remove All Items
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CartClient;
