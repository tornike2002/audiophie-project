import Image, { StaticImageData } from "next/image";
type YellowBannerTypes = {
  image: StaticImageData;
  about: string;
  buttonText: string;
};
const YellowBanner = ({ image, about, buttonText }: YellowBannerTypes) => {
  return (
    <section className="bg-customYellow  py-[55px] mx-6 mt-24 mb-10">
      <div
        className="flex flex-col items-center 
    justify-center gap-6 "
      >
        <Image src={image} alt="speaker" width={172.24817} height={207} />
        <h1
          className="text-center text-white font-Manrope 
      text-4xl leading-10 uppercase tracking-[1.286px]"
        >
          ZX9
          <br /> SPEAKER
        </h1>
        <p
          className=" max-w-[80%] text-center font-Manrope
       text-[15px] leading-[25px] text-white"
        >
          {about}
        </p>
        <button
          className="bg-black text-white py-[15px] px-[31px]"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default YellowBanner;
