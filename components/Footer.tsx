import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";
import fb from "../public/assets/shared/desktop/icon-facebook.svg";
import tw from "../public/assets/shared/desktop/icon-twitter.svg";
import ig from "../public/assets/shared/desktop/icon-instagram.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="bg-black text-white flex flex-col 
    justify-center items-center px-6"
    >
      <hr className="border-customYellow w-24 border-2" />
      <Image src={logo} alt="logo" className="pt-14 pb-12" />
      <div
        className="flex flex-col justify-center 
      items-center gap-4 pb-8 text-white font-Manrope
       font-bold leading-6 uppercase tracking-[2px]"
      >
        <Link href="/">HOME</Link>
        <Link href="/headphones">HEADPHONES</Link>
        <Link href="/speakers">SPEAKERS</Link>
        <Link href="/earphones">EARPHONES</Link>
      </div>
      <p
        className="text-center text-white font-Manrope 
      text-[15px] leading-6 opacity-50"
      >
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p
        className="text-center text-white font-Manrope 
      text-[15px] leading-6 opacity-50 pt-12"
      >
        Copyright 2021. All Rights Reserved
      </p>
      <div className="flex items-center justify-center gap-4 mb-9 pt-12">
        <Link href="facebook.com" target="_blank">
          <Image src={fb} alt="icons" />
        </Link>
        <Link href="twitter.com" target="_blank">
          <Image src={tw} alt="icons" />
        </Link>
        <Link href="instagram.com" target="_blank">
          <Image src={ig} alt="icons" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
