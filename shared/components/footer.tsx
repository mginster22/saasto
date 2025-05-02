import React from "react";
import { Navigations } from "./navigations";
import { Container } from "./container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface Props {
  className?: string;
}
const imglinks = [
  <Instagram key="icon" />,
  <Linkedin key="icon" />,
  <Facebook key="icon" />,
  <Twitter key="icon" />,
];
export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className="mt-[50px] py-[50px] max-sm:pb-[300px] max-sm:mt-0">
      <Container>
        <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
          <img src="/Logo.png" />
          <div className="flex items-center gap-[200px] max-sm:flex-col-reverse max-sm:gap-8 max-sm:items-start">
            <Navigations className=" max-sm:justify-start" />

            <div className="flex items-center gap-4 max-sm:mt-4 max-sm:gap-[40px] ">
              {imglinks.map((item, index) =>
                typeof item === "string" ? (
                  <img key={index} src={item} alt="icon" className="w-6 h-6" />
                ) : (
                  <span key={index} className="w-6 h-6">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 mt-4"></div>
        <div className="flex items-center justify-between text-gray-500 mt-8 ">
          <div className="flex items-center gap-10">
            <span className="hover:text-[#FF553E]">Terms & condition</span>
            <span className="hover:text-[#FF553E]">Privacy policy</span>
          </div>

          <span className="hover:text-[#FF553E]">
            All Right Reserved @ plowv.com
          </span>
        </div>
      </Container>
    </div>
  );
};
