import ProductDisplay from "@/components/ProductDisplay";
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
      {filtered.map((products) => {
        return (
          <div key={products.id}>
            <ProductDisplay
              image={products.image.mobile}
              isNew={products.new}
              title={products.name}
              about={products.description}
              productId={products.id}
              finder={`${params.productsPage}`}
              finderId={`${products.id}`}
            />
            <section className="flex flex-col items-center justify-center mt-5 mb-24 mx-6">
              <ThreeProduct image={headphone} link="Shop" title="headphones" />
              <ThreeProduct image={speaker} link="Shop" title="speakers" />
              <ThreeProduct image={earphone} link="Shop" title="earphones" />
            </section>
          </div>
        );
      })}
      <Blog />
    </>
  );
};

export default ProductsInfo;
