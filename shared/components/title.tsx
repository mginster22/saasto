import React from "react";
import { cn } from "../lib/utils";


interface Props {
    className?: string;
    text?: string
  }
  
 export const Title: React.FC<Props> = ({ className,text }) => {
      return (
          <h1 className={cn("",className)}>{text}</h1>
      );
  };