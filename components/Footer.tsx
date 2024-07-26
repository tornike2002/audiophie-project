import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Image src={logo} alt="logo" />
      <div>
        <Link href="/">HOME</Link>
        <Link href="/headphones">HEADPHONES</Link>
        <Link href="/speakers">SPEAKERS</Link>
        <Link href="/earphones">EARPHONES</Link>
      </div>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p>Copyright 2021. All Rights Reserved</p>
      <div className="flex items-center justify-center">
        <Link href="" target="_blank">
          <Image src={""} alt="icons" />
        </Link>
        <Link href="" target="_blank">
          <Image src={""} alt="icons" />
        </Link>
        <Link href="" target="_blank">
          <Image src={""} alt="icons" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
