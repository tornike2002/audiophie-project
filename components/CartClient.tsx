"use client";
import { useState } from "react";
import CartIcon from "../public/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { Modal } from "antd";
import { SubmitTypes } from "./AddCart";
const CartClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countCart, setCountCart] = useState<number>(1);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartItems") || "")
  );
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // get items from local storage

  // increasing values

  const handleValueIncrement = (id: number) => {
    setCartData((prevItems: SubmitTypes[]) =>
      prevItems.map((item: SubmitTypes) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Decreasing values
  const handleValueDecrement = (id: number) => {
    if (countCart <= 1) {
      return;
    }
    setCartData((prevItems: SubmitTypes[]) =>
      prevItems.map((item: SubmitTypes) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };
  console.log(cartData);
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
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {cartData.map((item: SubmitTypes) => {
          return (
            <div key={item.id}>
              <Image src={item.image} alt="Product" width={64} height={64} />
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
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
      </Modal>
    </div>
  );
};

export default CartClient;
