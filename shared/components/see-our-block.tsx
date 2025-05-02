import React from "react";
import { Container } from "./container";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const SeeOurBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className="mt-10 bg-[#F3FDFE] max-sm:mt-4">
      <Container className="flex gap-4 max-sm:flex-col-reverse py-8 max-sm:px-4">
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-8 ">
            <img src="/log1.png" className="w-[240px] ml-auto max-sm:hidden" />
            <img src="/log2.png" className="w-[340px] max-sm:w-[230px] " />
            <img src="/log3.png" className="w-[200px] max-sm:w-[230px] ml-auto" />
          </div>
          <div className="flex flex-col gap-8">
            <img src="/log4.png" className="w-[280px] max-sm:w-[230px]" />
            <img src="/log5.png" className="w-[400px] max-sm:w-[230px]" />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <Title
              text="See Our trusted partners"
              className="text-[48px] font-bold max-sm:text-[28px]"
            />
            <p className="text-[18px] font-normal text-gray-400 w-[475px] leading-[30px] mt-4 max-sm:w-[350px] max-sm:text-[14px]">
              Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict
              altera legimu. Me vita de lege ndos expet end is ad. Ex mei omita
              aliu mi ando
            </p>
          </div>
          <button className="border-1 py-4 border-[#FF553E] rounded-4xl w-[180px] text-[#FF553E] mt-10">
            Get Started
          </button>
        </div>
      </Container>
    </div>
  );
};
