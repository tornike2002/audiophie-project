import CustomHeaderBanner from "@/components/CustomHeaderBanner";
import ProductDisplay from "@/components/ProductDisplay";
import headphonex99two from "../../public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import headphonex99one from "../../public/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import headphonex59 from "../../public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
const Headphones = () => {
  return (
    <>
      <CustomHeaderBanner text="Headphones" />
      <ProductDisplay
        image={headphonex99two}
        isNew="NEW PRODUCT"
        title={`XX99 Mark II Headphones`}
        about="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
      <ProductDisplay
        image={headphonex99one}
        isNew=""
        title={`XX99 Mark I Headphones`}
        about="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      />
      <ProductDisplay
        image={headphonex59}
        isNew=""
        title={`XX59 Headphones`}
        about="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      />
    </>
  );
};

export default Headphones;
