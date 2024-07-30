import ProductDisplay from "@/components/ProductDisplay";
import yx1wireless from "../../../public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import CustomHeaderBanner from "@/components/CustomHeaderBanner";
// three component
import headphone from "../../../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import speaker from "../../../public/assets/product-zx9-speaker/mobile/image-product.jpg";
import earphone from "../../../public/assets/product-yx1-earphones/mobile/image-product.jpg";
import ThreeProduct from "@/components/ThreeProduct";
import Blog from "@/components/Blog";
import data from "../../../data/data.json";

const ProductsInfo = ({ params }: { params: any }) => {
  const filtered = data.filter(
    (productCategory) =>
      productCategory.category.toLowerCase() === params.productsPage
  );
  return (
    <>
      <CustomHeaderBanner text="earphones" />
      <ProductDisplay
        image={yx1wireless}
        isNew="NEW PRODUCT"
        title={`YX1 WIRELESS EARPHONES`}
        about="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
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

export default ProductsInfo;
