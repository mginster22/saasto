import React from "react";
import { Title } from "./title";
import { TrackerCard } from "./tracker-card";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Tracker: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-[#F3FDFE]  flex relative w-full max-sm:flex-col ">
      <img
        src="/drots.png"
        className="absolute right-[0] top-[-60px] w-[150px] max-sm:hidden"
      />
      <img
        src="/3d.png"
        className="absolute left-[-80px] top-[260px] w-[150px] max-sm:left-[330px] max-sm:w-[80px] max-sm:top-[90px]"
      />
      <Container className="flex flex-col py-[20px] ml-[200px] max-sm:ml-0 max-sm:px-2 max-sm:py-0 max-sm:pt-10 max-sm:pb-0">
        <Title
          text="How our Tracker work for you "
          className="text-[48px] font-bold max-sm:text-[28px]"
        />
        <p className=" text-gray-400 text-[18px] w-[700px] leading-[40px] max-sm:hidden">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula{" "}
        </p>

        <div className="flex max-sm:flex-col ">
          <TrackerCard className="mt-10 flex flex-col  gap-[50px] max-sm:gap-[10px] " />
          <div className=" flex max-sm:w-[400px] max-sm:flex-col-reverse  max-sm:items-center max-sm:mx-auto max-sm:mt-[20px] ">
            <div className="flex flex-col max-sm:items-start">
              <img
                src="/kit1.png"
                className="max-w-[445px] w-full max-sm:w-[400px] max-sm:translate-y-[-60px] "
              />
              <img
                src="/kit2.png"
                className="w-[270px] h-[320px] translate-y-[-60px] translate-x-[30px] max-sm:hidden"
              />
            </div>
            <img
              src="/kit3.png"
              className=" max-w-[400px] w-[400px] max-sm:w-[360px] max-sm:h-[440px] h-[484px] translate-x-[-30px] translate-y-[30px] max-sm:translate-x-0 max-sm:translate-y-0"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
