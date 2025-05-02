import React from "react";
import { cn } from "../lib/utils";
import { PriceBlockCard } from "./price-block-card";

interface Props {
  className?: string;
  active?: boolean;
  onChange: () => void;
}

export const PriceBlockCards: React.FC<Props> = ({ className, active,onChange }) => {
  return (
    <div className={cn("flex items-center gap-4 mt-4 ", className)}>
      <PriceBlockCard
        isActive={!active}
        className=""
        title={"Free"}
        text={"1 seat"}
        text2={"2 project"}
        price={"0"}
        plan={"Forever"}
        onChange={onChange}
      />
      <PriceBlockCard
        className=""
        title={"Premium"}
        text={"Unlimited Seat"}
        text2={"Unlimited project"}
        price={"30"}
        plan={"Forever"}
        isActive={active}
        onChange={onChange}

      />
    </div>
  );
};
