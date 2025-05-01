import React from "react";
import { Title } from "./title";
import { AnalyticsBlockCard } from "./analytics-block-card";
import { cn } from "../lib/utils";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const AnalyticsBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex  gap-10 mt-[20px] max-sm:flex-col ", className)}>
      <div className="w-[700px] max-sm:w-[400px]">
        <img src="/Objects.png" />
      </div>
      <div className="w-[600px] mt-14 max-sm:w-[430px] max-sm:mt-0">
        <Title
          text="Analytics & Reporting Brackdown"
          className="font-bold text-[48px] max-sm:text-[28px] max-sm:text-center"
        />
        <p className="text-[18px] font-normal text-gray-400 w-[595px] leading-[30px] max-sm:text-center max-sm:text-[14px] max-sm:w-[405px]">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula{" "}
        </p>
        <AnalyticsBlockCard className="mt-10 flex flex-col gap-[30px] max-sm:gap-[10px] max-sm:px-2" />
      </div>
    </div>
  );
};
