import Image from "next/image";
import Link from "next/link";
type ThreeProduct = {
  image: string;
  title: string;
  link: string;
};
const ThreeProduct = ({ image, title, link }: ThreeProduct) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={image} alt="shop item" width={80} height={104} />
      <h2
        className="font-Manrope text-black text-center text-[15px] font-bold 
    tracking-[1.071px] uppercase"
      >
        {title}
      </h2>
      <Link
        href="/"
        className="text-black font-Manrope text-[13px] font-bold tracking-[1px]
     uppercase opacity-50"
      >
        {link}
      </Link>
    </div>
  );
};

export default ThreeProduct;
