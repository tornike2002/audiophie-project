import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <section className="bg-mobileHeader h-[80vh] bg-center bg-no-repeat bg-cover">
        <div className="text-white flex flex-col justify-center items-center h-full font-Manrope">
          <h3 className="text-sm tracking-[10px] uppercase opacity-[0.4964]">
            NEW PRODUCT
          </h3>
          <h1 className="text-4xl text-center font-bold leading-10 tracking-[1.286px] uppercase">
            XX99 Mark II
            <br /> HeadphoneS
          </h1>
          <p className="text-center text-[15px] leading-[25px] opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button name="SEE PRODUCT" />
        </div>
      </section>
    </main>
  );
}
