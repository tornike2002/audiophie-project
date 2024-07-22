import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";
import Cart from "../public/assets/shared/desktop/icon-cart.svg";
import Hamburger from "../public/assets/shared/tablet/icon-hamburger.svg";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-6 py-8 bg-darkBlack">
        <Image src={Hamburger} alt="hamburgermenu" className="cursor-pointer" />
        <Image src={logo} alt="Logo" className="cursor-pointer" />
        <Image src={Cart} alt="Cart" className="cursor-pointer" />
      </nav>
    </header>
  );
};

export default Navbar;
