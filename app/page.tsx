import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import headphone from "../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import speaker from "../public/assets/product-zx9-speaker/mobile/image-product.jpg";
import earphone from "../public/assets/product-yx1-earphones/mobile/image-product.jpg";
export default function Home() {
  return (
    <main>
      <section className="bg-mobileHeader h-[80vh] bg-center bg-no-repeat bg-cover px-6">
        <div
          className="text-white flex flex-col justify-center items-center h-full font-Manrope
         gap-4 "
        >
          <h3 className="text-sm tracking-[10px] uppercase opacity-[0.4964] pb-2">
            NEW PRODUCT
          </h3>
          <h1 className="text-4xl text-center font-bold leading-10 tracking-[1.286px] uppercase">
            XX99 Mark II
            <br /> HeadphoneS
          </h1>
          <p className="text-center text-[15px] leading-[25px] opacity-75 pb-3 w-[328px] max-w-full">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button name="SEE PRODUCT" />
        </div>
      </section>
      {/* three product with shop link */}
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image src={headphone} alt="shop item" width={80} height={104} />
          <h2
            className="font-Manrope text-black text-center text-[15px] font-bold 
          tracking-[1.071px] uppercase"
          >
            Headphones
          </h2>
          <Link href="/" className="text-black font-Manrope text-[13px] font-bold tracking-[1px]
           uppercase opacity-50">Shop</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={speaker} alt="shop item" width={80} height={104} />
          <h2
            className="font-Manrope text-black text-center text-[15px] font-bold 
          tracking-[1.071px] uppercase"
          >
            Speakers
          </h2>
          <Link href="/" className="text-black font-Manrope text-[13px] font-bold tracking-[1px]
           uppercase opacity-50">Shop</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={earphone} alt="shop item" width={80} height={104} />
          <h2
            className="font-Manrope text-black text-center text-[15px] font-bold 
          tracking-[1.071px] uppercase"
          >
            Earphones
          </h2>
          <Link href="/" className="text-black font-Manrope text-[13px] font-bold tracking-[1px]
           uppercase opacity-50">Shop</Link>
        </div>
      </section>
    </main>
  );
}
