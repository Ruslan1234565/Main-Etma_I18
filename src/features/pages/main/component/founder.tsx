import Image from "next/image";
import founder from "@/assets/images/founder.jpg";
import Link from "next/link";

export default function Founder() {
  return (
    <div className="flex mt-[20px] relative  min-h-[430px]">
      <Image
        src={founder}
        alt="founder"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container flex justify-end items-center ml-[-200px]">
        <div className="flex flex-col gap-[33px] max-w-[350px]">
          <h4 className="text-[35px] text-[#1b1b1b]">Meet our founder</h4>
          <div className="flex flex-col gap-[12px]">
            <p className="text-[#666666] text-[16px]">
              {`Lucy's story is one you really need to read; it changed an industry
            forever.`}
            </p>
            <Link href="/founder" className="text-[14px] text-[#1b1b1b]">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
