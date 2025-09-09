import Image from "next/image";
import products from "@/assets/images/products.png";

export default function Banner() {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center pt-[66px] pb-[83px] my-[20px]">
      <h2 className="text-white text-[38px]/[42px]">THE QUEST FOR BETTER.</h2>
      <Image src={products} alt="banner" className="my-[35px]" />
      <p className="text-white text-[16px]/[25px] max-w-[532px] text-center">
        At LYMA, we’re always searching for the perfect balance of science,
        nature and technology. Every LYMA product has been designed to work
        together. We know that when we discover the best, you’ll discover yours.
      </p>
    </div>
  );
}
