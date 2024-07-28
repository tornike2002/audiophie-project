import CustomHeaderBanner from "@/components/CustomHeaderBanner";
import ProductDisplay from "@/components/ProductDisplay";
import zx9speaker from "../../public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx7speaker from "../../public/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
// three component
import headphone from "../../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import speaker from "../../public/assets/product-zx9-speaker/mobile/image-product.jpg";
import earphone from "../../public/assets/product-yx1-earphones/mobile/image-product.jpg";
import ThreeProduct from "@/components/ThreeProduct";
import Blog from "@/components/Blog";
const Speakers = () => {
  return (
    <>
      <CustomHeaderBanner text="Speakers" />
      <ProductDisplay
        image={zx9speaker}
        isNew="NEW PRODUCT"
        title={`ZX9 speaker`}
        about="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      />
      <ProductDisplay
        image={zx7speaker}
        isNew=""
        title={`ZX7 speaker`}
        about="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      />
      <section className="flex flex-col items-center justify-center mt-5 mb-24 mx-6">
        <ThreeProduct image={headphone} link="Shop" title="headphones" />
        <ThreeProduct image={speaker} link="Shop" title="speakers" />
        <ThreeProduct image={earphone} link="Shop" title="earphones" />
      </section>
      <Blog />
    </>
  );
};

export default Speakers;
