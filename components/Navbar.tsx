import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";

import Hamburger from "../public/assets/shared/tablet/icon-hamburger.svg";
import CartClient from "./CartClient";
import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-6 py-8 bg-darkBlack">
        <Image src={Hamburger} alt="hamburgermenu" className="cursor-pointer" />
        <Link href="/">
          <Image src={logo} alt="Logo" className="cursor-pointer" />
        </Link>
        <CartClient />
      </nav>
    </header>
  );
};

export default Navbar;
