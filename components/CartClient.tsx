"use client";
import { useState, useEffect } from "react";
import CartIcon from "../public/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { Modal } from "antd";
import { SubmitTypes } from "./AddCart";

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

  const handleOk = () => {
    setIsModalOpen(false);
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