import ProductDisplay from "@/components/ProductDisplay";
import yx1wireless from "../../public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
const Earphones = () => {
  return (
    <>
      <ProductDisplay
        image={yx1wireless}
        isNew="NEW PRODUCT"
        title={`YX1 WIRELESS EARPHONES`}
        about="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
    </>
  );
};

export default Earphones;
