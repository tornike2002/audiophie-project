import CustomHeaderBanner from "@/components/CustomHeaderBanner";
import ProductDisplay from "@/components/ProductDisplay";
import headphonex99 from "../../public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
const Headphones = () => {
  return (
    <>
      <CustomHeaderBanner text="Headphones" />
      <ProductDisplay
        image={headphonex99}
        isNew="NEW PRODUCT"
        title={`XX99 Mark II Headphones`}
        about="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
    </>
  );
};

export default Headphones;
