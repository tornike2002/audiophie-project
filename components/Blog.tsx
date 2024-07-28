import Image, { StaticImageData } from "next/image";
import info from "../public/assets/shared/mobile/image-best-gear.jpg";
const Blog = () => {
  return (
    <section className="mx-6 flex flex-col gap-3 mb-24">
        <Image src={info} alt="guy with headphones" />
        <h1
          className="text-center text-black font-Manrope text-[28px] 
        font-bold tracking-[1px] uppercase"
        >
          Bringing you the
          <br /> <span className="text-customYellow">best</span> audio gear
        </h1>
        <p
          className="text-center text-black font-Manrope 
        text-[15[x] leading-[25px] opacity-50"
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>
  );
};

export default Blog;
