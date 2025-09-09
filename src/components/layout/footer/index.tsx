import Link from "next/link";
import { FooterProps } from "./types/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { PiPinterestLogo } from "react-icons/pi";

export default async function Footer() {
  const response = await fetch(process.env.API_HOST + "/api/footer");

  const footer = await response.json();

  return (
    <footer className="bg-black text-white py-[96px] mt-[20px]">
      <div className="container">
        <div className="flex justify-between max-w-[1015px] mx-auto">
          {footer.map((items: FooterProps) => (
            <ul key={items.title} className="flex flex-col gap-[8px]">
              <li className="text-white text-[13px]">{items.title}</li>
              {items.links.map((link) => (
                <Link href={link.href} key={link.title}>
                  <li className="text-[#7e7e7e] text-[12px]">{link.title}</li>
                </Link>
              ))}
            </ul>
          ))}
          <div className="flex flex-col gap-[42px] text-end">
            <p className="text-white text-[13px]">NEW LETTER</p>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[#7e7e7e] text-[12px]">
                Subscribe to our newsletter.
              </span>
              <div className="flex">
                <Input
                  placeholder="LYMA newsletter"
                  className="border border-white bg-transparent rounded-none text-[12px] py-12px] min-w-[231px]"
                />
                <Button className="rounded-none bg-white text-[#7e7e7e] hover:bg-white hover:shadow-md hover:shadow-white/50 cursor-pointer">
                  SIGN UP
                </Button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-end gap-[24px]">
                <Link href="https://www.youtube.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Youtube size={16} />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Linkedin size={16} />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Instagram size={16} />
                  </div>
                </Link>
                <Link href="https://www.facebook.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <Facebook size={16} />
                  </div>
                </Link>
                <Link href="https://www.pinterest.com/">
                  <div className="rounded-full w-[26px] h-[26px] flex justify-center items-center border border-white ">
                    <PiPinterestLogo size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
