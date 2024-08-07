"use client";
import { useState } from "react";
import CartIcon from "../public/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { Modal } from "antd";

const CartClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const cartItems = localStorage.getItem("cartItems");
  console.log(cartItems);
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
        title={`Cart ()`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {length === 0 ? (
          "Cart is empty"
        ) : (
          <div>
            <Image src={``} alt="Product" width={64} height={64} />
            <p></p>
            <p></p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CartClient;
