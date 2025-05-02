import React from "react";
import { Container } from "./container";
import { cn } from "../lib/utils";
import { Title } from "./title";
import { SomeExelentCard } from "./some-exelent-card";


interface Props {
  className?: string;
}

export const SomeExelentblock: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("relative mt-[50px] pb-[100px] ", className)}>
        <img src="/vector22.png" className="absolute top-[-70px] max-sm:hidden"/>
      <Container className=" flex flex-col gap-4 items-center  relative max-sm:px-2 ">
            <img src="/rocket.png" className="absolute right-0 top-[-50px] max-sm:w-[90px] max-sm:left-[-10px] max-sm:top-[-120px]"/>
        <Title
          text="Some excellent features for you"
          className="font-bold text-[48px] text-center w-[800px] max-sm:text-[28px] max-sm:w-[380px] "
        />
        <p className="text-[18px] text-center font-normal text-gray-400 w-[595px] max-sm:text-[18px] max-sm:w-[380px] leading-[30px]">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula
        </p>
        <SomeExelentCard  className="max-sm:flex-col"/>
      </Container>
    </div>
  );
};
