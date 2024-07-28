import Button from "@/components/Button";
import headphone from "../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import speaker from "../public/assets/product-zx9-speaker/mobile/image-product.jpg";
import earphone from "../public/assets/product-yx1-earphones/mobile/image-product.jpg";
import ThreeProduct from "@/components/ThreeProduct";
import Cardspeaker from "../public/assets/home/mobile/image-speaker-zx9.png";
import YellowBanner from "@/components/YellowBanner";
import greySpeaker from "../public/assets/home/mobile/image-speaker-zx7.jpg";
import blackairpods from "../public/assets/home/mobile/image-earphones-yx1.jpg";
import Image from "next/image";
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
      <section className="flex flex-col items-center justify-center my-5 mx-6">
        <ThreeProduct image={headphone} link="Shop" title="headphones" />
        <ThreeProduct image={speaker} link="Shop" title="speakers" />
        <ThreeProduct image={earphone} link="Shop" title="earphones" />
      </section>

      {/* yellow board card  */}
      <section>
        <YellowBanner
          about="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          image={Cardspeaker}
          buttonText="See Product"
        />
      </section>
      {/* speaker banner */}
      <section className="mx-6 relative">
        <div>
          <Image src={greySpeaker} alt="picture" />
        </div>
        <div className="absolute top-28 left-14">
          <h1
            className="text-black font-Manrope text-[28px] 
          font-bold tracking-[2px] uppercase pb-8"
          >
            ZX7 SPEAKER
          </h1>
          <button
            className="text-black font-Manrope text-sm font-bold
           tracking-[1px] uppercase bg-transparent 
           border py-[15px] px-[30px] border-black"
          >
            SEE PRODUCT
          </button>
        </div>
      </section>
      {/* airpods black section */}
      <section className="mx-6 mt-10 mb-6">
        <div>
          <Image src={blackairpods} alt="picture" />
          <h1
            className="text-black font-Manrope text-[28px] 
          font-bold tracking-[2px] uppercase py-8"
          >
            YX1 EARPHONES
          </h1>
          <button
            className="text-black font-Manrope text-sm font-bold
           tracking-[1px] uppercase bg-transparent 
           border py-[15px] px-[30px] border-black"
          >
            SEE PRODUCT
          </button>
        </div>
      </section>
      {/* info section */}
   
    </main>
  );
}
