import Image, { StaticImageData } from "next/image";
type ProductDisplayTypes = {
  image: StaticImageData;
  isNew: string | null;
  title: string;
  about: string;
};
const ProductDisplay = ({
  image,
  isNew,
  title,
  about,
}: ProductDisplayTypes) => {
  return (
    <section className="mb-24 mx-6 mt-6">
      <div
        className="flex flex-col justify-center 
      items-center text-center gap-6"
      >
        <Image src={image} alt="image" />
        <h2
          className="text-customYellow text-center font-Manrope text-sm 
        tracking-[10px] uppercase"
        >
          {isNew}
        </h2>
        <h1
          className="text-black text-center font-manrope text-[28px] 
        font-bold tracking-[1px] uppercase"
        >
          {title}
        </h1>
        <p className="text-black font-Manrope text-[15px] leading-[25px] opacity-50">
          {about}
        </p>
        <button
          type="button"
          className="bg-customYellow border-none
           text-white py-[20px] px-[30px] font-Manrope 
           font-bold text-[13px] leading-[1px] uppercase"
        >
          SEE PRODUCT
        </button>
      </div>
    </section>
  );
};

export default ProductDisplay;
