import Image from "next/image";
import Link from "next/link";
import data from "../../../../data/data.json";
import Button from "@/components/Button";
import headphone from "../../../../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import speaker from "../../../../public/assets/product-zx9-speaker/mobile/image-product.jpg";
import earphone from "../../../../public/assets/product-yx1-earphones/mobile/image-product.jpg";
import ThreeProduct from "@/components/ThreeProduct";
import Blog from "@/components/Blog";
import AddCart from "@/components/AddCart";
const ProductsDetails = ({ params }: { params: any }) => {
  const filtered = data.filter((proId) => proId.id == params.productsId);

  return (
    <div className="my-8">
      <Link
        className="mx-6 text-black opacity-50 font-Manrope text-[15px] leading-[25px]"
        href={"/"}
      >
        Go Back
      </Link>
      <div className="mx-6 my-7">
        {filtered.map((productsInfo) => {
          return (
            <>
              <div
                key={productsInfo.id}
                className="flex flex-col justify-between items-center"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={productsInfo.image.mobile}
                    alt="image"
                    width={181}
                    height={201}
                  />
                </div>
                {/* description */}
                <div className="flex flex-col gap-6 items-start justify-start font-Manrope">
                  <h2
                    className="text-customYellow text-center font-Manrope text-sm 
                                tracking-[10px] uppercase"
                  >
                    {productsInfo.new && "NEW PRODUCT"}
                  </h2>
                  <h1 className="text-black text-[28px] font-bold leading-8 tracking-[1px]">
                    {productsInfo.name}
                  </h1>
                  <p className="text-black text-[15px] leading-[25px] opacity-50">
                    {productsInfo.description}
                  </p>
                  <span className="text-black font-bold text-lg leading-normal tracking-[1.286px] uppercase">
                    $ {productsInfo.price}
                  </span>
                </div>
                {/* item count */}
                <AddCart />
                {/* feature */}
                <div
                  className="font-Manrope flex flex-col justify-start 
                w-full mt-[88px]"
                >
                  <h1
                    className="text-black text-2xl font-bold leading-9 
                  tracking-[0.857px] uppercase pb-6"
                  >
                    Features
                  </h1>
                  <p className="text-black text-[15px] leading-[25px] opacity-50">
                    {productsInfo.features}
                  </p>
                </div>
                {/* in the box */}
                <div className="w-full mt-[88px]">
                  <h1
                    className="text-black text-2xl font-bold leading-9 
                  tracking-[0.857px] uppercase pb-6"
                  >
                    In the box
                  </h1>
                  {productsInfo.includes.map((quan) => {
                    return (
                      <div className="flex flex-col items-center flex-start font-Manrope ">
                        <h3 className="flex gap-6 flex-start w-full">
                          <span className="text-customYellow text-[15px] font-bold leading-[25px]">
                            {quan.quantity}x
                          </span>
                          <span className="text-black text-[15px] leading-[25px] opacity-50 ">
                            {quan.item}
                          </span>
                        </h3>
                      </div>
                    );
                  })}
                </div>
                {/* gallery */}
                <section className=" flex flex-col gap-5 mt-24">
                  <div className="flex flex-col gap-5">
                    <Image
                      src={productsInfo.gallery.first.mobile}
                      alt={"mobile picture"}
                      width={335}
                      height={223}
                      className="rounded-lg"
                    />
                    <Image
                      src={productsInfo.gallery.second.mobile}
                      alt={"mobile picture"}
                      width={335}
                      height={223}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="">
                    <Image
                      src={productsInfo.gallery.third.mobile}
                      alt={"mobile picture"}
                      width={335}
                      height={223}
                      className="rounded-lg"
                    />
                  </div>
                </section>
              </div>
            </>
          );
        })}
      </div>
      <section className="flex flex-col items-center justify-center mt-5 mb-24 mx-6">
        <ThreeProduct image={headphone} link="Shop" title="headphones" />
        <ThreeProduct image={speaker} link="Shop" title="speakers" />
        <ThreeProduct image={earphone} link="Shop" title="earphones" />
      </section>
      <Blog />
    </div>
  );
};

export default ProductsDetails;
