import React from "react";
import cn from "clsx";
import { Container } from "./container";
import { Navigations } from "./navigations";
import { AuthButtons } from "./auth-buttons";
import { Title } from "./title";
import { Burger } from "./burger";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("relative pb-[200px] max-sm:pb-[100px]")}>
      <div
        className="relative z-10 pb-[200px] "
        style={{ backgroundImage: "url(/header.png)" }}
      >
        <Container className="pt-10 flex items-center justify-between max-sm:pt-4 ">
          <img
            src="/Logo.png"
            className={cn("w-[178px] h-[40px] max-sm:w-[130px] max-sm:h-[30px]")}
            alt="logo"
          />
          <Navigations className="max-sm:hidden"/>
          <AuthButtons className="max-sm:hidden"/>
          <Burger />
        </Container>

        <Container className="flex flex-col gap-4 items-center mt-[200px] relative max-sm:mt-[100px] max-sm:items-start">
          <Title
            text="A collaborative  Time Tracking that you Need"
            className="font-bold text-[4em] text-center w-[800px] max-sm:text-[28px] max-sm:w-[300px] max-sm:text-start"
          />
          <img
            src="/cloack.png"
            alt="clock"
            className="absolute left-0 -top-[90px] w-[265px] max-sm:w-[130px] max-sm:left-[250px] max-sm:top-[-50px]"
          />
          <p className="text-[18px] text-center font-normal text-gray-400 w-[595px] max-sm:text-[14px] max-sm:w-[300px] max-sm:text-start leading-[30px] ">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at pretium purus pretium ligula
          </p>
          <button className="bg-[#FF553E] text-white px-8 py-[20px] rounded-4xl cursor-pointer mt-[20px] ">
            Start 14 Days Trial
          </button>
          <img
            src="/desk.png"
            alt="desk"
            className="absolute right-[200px] -bottom-[70px] w-[170px] object-cover max-sm:hidden"
          />
        </Container>
        <img
          src="/phoneblack.png"
          alt="phone"
          className="absolute left-0 -bottom-[70px] w-[400px] h-[450px] object-cover max-sm:hidden"
        />
        <img
          src="/phonebig.png"
          alt="phone"
          className="absolute right-0 -bottom-[100px] w-[350px] h-[600px] object-cover max-sm:hidden"
        />
      </div>
      <div
        className="absolute  bottom-[80px]  transform  z-30  px-10 py-10  w-full flex justify-center items-center card"
        
      >
        <div className="flex justify-between w-[600px] ">
          <div className="flex flex-col gap-2 items-center">
            <strong className="text-3xl font-extrabold">150k</strong>
            <span className="text-gray-500">Active users</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <strong className="text-3xl font-extrabold">30k</strong>
            <span className="text-gray-500">Total Download</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <strong className="text-3xl font-extrabold">10k</strong>
            <span className="text-gray-500">Customer</span>
          </div>
        </div>
      </div>
    </header>
  );
};
