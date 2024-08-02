"use client";
import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";
import CartIcon from "../public/assets/shared/desktop/icon-cart.svg";
import Hamburger from "../public/assets/shared/tablet/icon-hamburger.svg";
import Cart from "./Cart";
import { useState } from "react";
import { Button, Modal } from "antd";

const Navbar = () => {
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
    <header>
      <nav className="flex justify-between items-center px-6 py-8 bg-darkBlack">
        <Image src={Hamburger} alt="hamburgermenu" className="cursor-pointer" />
        <Image src={logo} alt="Logo" className="cursor-pointer" />
        <Image
          src={CartIcon}
          alt="Cart"
          className="cursor-pointer"
          onClick={showModal}
        />
      </nav>
      {/* modal */}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </header>
  );
};

export default Navbar;
