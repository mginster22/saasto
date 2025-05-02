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
        <button
          onClick={() => setActive(index)}
          key={index}
          className={cn(
            "border-b-2 transition-all duration-300 hover:text-[#FF553E] cursor-pointer",
            active === index
              ? "border-[#FF553E] text-[#FF553E]"
              : "border-transparent"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
