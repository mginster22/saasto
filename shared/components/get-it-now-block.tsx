import React from "react";
import { Container } from "./container";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const GetItNowBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className=" bg-[#FFF8F2] relative ">
        <img src="/hand1.png" className="absolute top-[80px] left-[0] w-[200px] max-sm:hidden"/>
      <Container className="flex gap-[150px] pt-[100px] justify-center items-center max-sm:justify-start max-sm:pt-[50px] max-sm:pb-[50px] max-sm:px-4">
        <div>
          <Title text="Get it now for free" className="text-[48px] font-bold max-sm:text-[28px]" />
          <p className="text-[18px] font-normal text-gray-400 w-[475px] leading-[30px] max-sm:text-[14px] max-sm:w-[350px]">
            We are offering free debit cards once you sing up and order a card.
            we wont chargeyou for our debit card.
          </p>
          <div className="flex items-center gap-4 mt-4 max-sm:flex-col max-sm:items-start">
            <button className="bg-[#FF553E] py-5 px-5 rounded-xl">
              <img src="/app.png" className="w-[100px] max-sm:w-[130px] " />
            </button>
            <button className="border-1 border-[#FF553E] py-5 px-5 rounded-xl">
              <img src="/google.png" className="w-[100px]  max-sm:w-[130px]"/>
            </button>
          </div>
        </div>
        <div>
            <img src="/mobile.png" className="w-[340px] max-sm:hidden"/>
        </div>
      </Container>
      <img src="/hand2.png" className="absolute top-[300px] right-[0] w-[200px] max-sm:top-[200px]"/>
    </div>
  );
};
