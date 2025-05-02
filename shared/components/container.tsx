import React from "react";
import { cn } from "../lib/utils";


interface Props {
    className?: string;
    children?: React.ReactNode
  }
  
 export const Container: React.FC<Props> = ({ className,children }) => {
      return (
          <div className={cn("max-w-[1200px] w-full mx-auto max-sm:max-w-[390px]", className)}>
              {children}
          </div>
      );
  };