import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type ThreeProductTypes = {
  image: StaticImageData;
  title: string;
  link: string;
};
const ThreeProduct = ({ image, title, link }: ThreeProductTypes) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={image} alt="shop item" width={104} height={104} />
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
