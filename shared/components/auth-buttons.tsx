import React from "react";
import { cn } from "../lib/utils";


interface Props {
    className?: string;
  }
  
 export const AuthButtons: React.FC<Props> = ({ className }) => {
      return (
          <div className={cn("flex items-center gap-4", className)} >
              <button className="text-[#FF553E] cursor-pointer hover:mb-1 transition-all ">Login</button>
              <button className="bg-[#FF553E] text-white px-6 w-[120px]   py-[13px] rounded-4xl cursor-pointer max-sm:py-[4px] whitespace-nowrap ">Sign up</button>
          </div>
      );
  };