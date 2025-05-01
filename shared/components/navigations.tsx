"use client";
import React from "react";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
}
const nav = ["Demos", "Features", "Pricing", "Contact"];
export const Navigations: React.FC<Props> = ({ className }) => {
  const [active, setActive] = React.useState(0);
  return (
    <div className={cn("flex items-center gap-8", className)}>
      {nav.map((item, index) => (
        <button onClick={() => setActive(index)} key={index} className={cn("hover:text-[#FF553E] hover:mb-1 transition-all cursor-pointer",
          {"border-b-2 border-[#FF553E]":active === index}
        )}>
          {item}
        </button>
      ))}
    </div>
  );
};
