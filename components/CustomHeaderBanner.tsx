import React from "react";
type CustomHeaderBannerTypes = {
  text: string;
};
const CustomHeaderBanner = ({ text }: CustomHeaderBannerTypes) => {
  return (
    <section className="flex justify-center items-center bg-darkBlack">
      <h1 className="text-white font-Manrope text-[28px] font-bold tracking-[2px] uppercase py-16">
        {text}
      </h1>
    </section>
  );
};

export default CustomHeaderBanner;
