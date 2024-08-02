import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";

import Hamburger from "../public/assets/shared/tablet/icon-hamburger.svg";
import Cart from "./Cart";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-6 py-8 bg-darkBlack">
        <Image src={Hamburger} alt="hamburgermenu" className="cursor-pointer" />
        <Image src={logo} alt="Logo" className="cursor-pointer" />
        <Cart />
      </nav>
    </header>
  );
};

export default Navbar;
