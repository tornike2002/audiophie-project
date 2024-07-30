import Image from "next/image";
import Link from "next/link";
import data from "../../../../data/data.json";

const ProductsDetails = ({ params }: { params: any }) => {
  const filtered = data.filter((proId) => proId.id == params.productsId);

  return (
    <>
      <Link
        className="mx-6 text-black opacity-50 font-Manrope text-[15px] leading-[25px]"
        href={"/"}
      >
        Go Back
      </Link>
      <section className="mx-6">
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
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ProductsDetails;
