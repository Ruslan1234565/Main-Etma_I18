import Image from "next/image";
import supplement from "@/assets/images/supplement.jpg";
import laser from "@/assets/images/laser.jpg";
import Link from "next/link";

export default function Discover() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[16px]">
      <div className="flex relative w-full h-[500px] flex items-end justify-center text-white py-[30px] text-center">
        <Image
          src={supplement}
          alt="supplement"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="z-1">
          <h2 className="text-white text-[32px] mb-[13px]">Supplement.</h2>
          <div className="flex flex-col gap-[9px] mb-[25px]">
            <p className="text-[16px]">Nine powerful ingredients.</p>
            <p className="text-[16px]">One ultimate formula.</p>
          </div>
          <div className="flex gap-[125px]">
            <Link href="/supplement" className="text-[14px] tracking-[2px] hover:font-bold uppercase">Discover</Link>
            <Link href="/" className="text-[14px] tracking-[2px] hover:font-bold uppercase">Buy</Link>
          </div>
        </div>
      </div>
      <div className="flex relative w-full h-[500px] flex items-end justify-center text-white py-[30px] text-center">
        <Image
          src={laser}
          alt="supplement"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="z-1">
          <h2 className="text-[32px] mb-[13px]">Laser.</h2>
          <div className="flex flex-col gap-[9px] mb-[25px]">
            <p className="text-[16px]">Ultimate skin regeneration.</p>
            <p className="text-[16px]">A new dawn for beauty.</p>
          </div>
          <div className="flex gap-[125px]">
            <Link href="/laser" className="text-[14px] tracking-[2px] hover:font-bold uppercase">Discover</Link>
            <Link href="/" className="text-[14px] tracking-[2px] hover:font-bold uppercase">Buy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
