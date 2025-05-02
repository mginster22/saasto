"use client";
import React from "react";
import { Title } from "./title";
import { Switch } from "./ui/switch";
import { Container } from "./container";
import { CustomSwitch } from "./ui/custom-switch";
import { PriceBlockCards } from "./price-block-cards";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

export const PriceBlock: React.FC<Props> = ({ className }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="mx-auto relative ">
      <Container className="flex flex-col items-center py-[50px]">
        <Title
          text="Flexible work, Simple Price"
          className="text-[48px] font-bold max-sm:text-[28px]"
        />
        <span className="text-gray-400 text-[18px] mt-4">
          Growth your business with using us
        </span>
        <div className="flex items-center gap-4 mt-4">
          <span
            className={cn(
              !isChecked ? "text-[#FF553E] text-[24px]" : "text-[18px]"
            )}
          >
            Monthly
          </span>
          <CustomSwitch checked={isChecked} onChange={setIsChecked} />
          <span
            className={cn(
              isChecked ? "text-[#FF553E] text-[24px]" : "text-[18px]"
            )}
          >
            Yearly
          </span>
        </div>
        <img src="/sand.png" className="absolute right-[100px] top-[120px] max-sm:hidden" />

        <PriceBlockCards active={isChecked} className="max-sm:flex-col" onChange={()=>setIsChecked(!isChecked)}/>
      </Container>
      <img src="/hi.png" className="absolute left-[-120px] top-[300px] max-sm:hidden"/>
    </div>
  );
};
