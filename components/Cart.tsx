"use client";
import { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import CartIcon from "../public/assets/shared/desktop/icon-cart.svg";
const Cart = () => {
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
        title={`Cart (${0})`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Cart;
