"use client";
import React from "react";
import { Navigations } from "./navigations";
import { cn } from "../lib/utils";
import { AuthButtons } from "./auth-buttons";

interface Props {
  className?: string;
}

export const Burger: React.FC<Props> = ({ className }) => {
  const [active, setActive] = React.useState(false);
  return (
    <div
      className={cn(
        "relative  items-center max-2xl:hidden max-sm:flex ",
        className
      )}
    >
      <button onClick={() => setActive(!active)} className=" ">
        <img src="/burger.svg" className="w-[30px] h-[30px]" />
      </button>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden absolute right-[40px] top-[60px] ",
          
          active
            ? "opacity-100 max-h-[500px] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        )}
      >
        <Navigations className="max-sm:flex max-sm:gap-[30px]" />
      </div>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden absolute right-[50px] top-[-2px]",
         
          active
            ? "opacity-100 max-h-[200px] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
        )}
        
      >
        <AuthButtons className="max-sm:flex" />
      </div>
    </div>
  );
};
