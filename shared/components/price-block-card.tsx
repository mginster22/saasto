import React from "react";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
  title: string;
  text: string;
  text2: string;
  price: string;
  plan: string;
  isActive?: boolean;
  onChange: () => void;
}

export const PriceBlockCard: React.FC<Props> = ({
  className,
  title,
  text,
  text2,
  price,
  plan,
  isActive,
  onChange
}) => {
  return (
      <div
        className={cn(
          "border-1 border-[#FF553E] rounded-4xl p-14 flex flex-col items-center gap-8 w-[470px] h-[608px] max-sm:flex  max-sm:w-[380px] max-sm:h-[250px] max-sm:py-4 max-sm:items-start max-sm:px-4",
          isActive && "bg-[#FF553E]",
          className
        )}
        onClick={onChange}
      >
        <div className="flex flex-col gap-[50px] max-sm:flex max-sm:flex-row max-sm:justify-between ">
          <div className="flex flex-col gap-[50px] max-sm:gap-[10px]  max-sm:w-[170px]">
            <h4
              className={cn("text-[36px] font-bold max-sm:text-[24px]", isActive && "text-white")}
            >
              {title}
            </h4>
            <span
              className={cn(
                "text-[#FF553E] " ,
                isActive && "text-white",
                className
              )}
            >
              {text}
            </span>
            <span
              className={cn(
                "text-[#FF553E]",
                isActive && "text-white",
                className
              )}
            >
              {text2}
            </span>
          </div>
          <div
            className={cn(
              "text-[#FF553E] font-bold flex items-center mt-[40px] max-sm:mt-0 max-sm:translate-y-[-20px] ",
              isActive && "text-white",
              className
            )}
          >
            <span className=" text-[42px] flex ">
              <span className="text-[13px] font-normal ">$</span>
              {price}
            </span>
            <span className=" text-[16px] flex items-end">/{plan}</span>
          </div>
        </div>

        <button
          className={cn(
            "w-[240px]  py-4  rounded-4xl max-sm:mx-auto",
            isActive ? "bg-white text-[#FF553E]" : "text-white bg-[#FF553E]",
            className
          )}
        >
          Start 14 Days Trial
        </button>
      </div>
  );
};
