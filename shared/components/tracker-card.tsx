import { title } from "process";
import React from "react";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

const cards = [
  {
    icon: "/time1.png",
    title: "Time Tracking",
    subTitle: "Time Tracking is never been easier.just let the stopwatch run",
  },
  {
    icon: "/time2.png",
    title: "Expenses",
    className: "ml-[140px] max-sm:ml-0",
    subTitle: "Time Tracking is never been easier.just let the stopwatch run",
  },
  {
    icon: "/time3.png",
    title: "Time Tracking",
    subTitle: "Time Tracking is never been easier.just let the stopwatch run",
  },
];
export const TrackerCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("relative",className)}>
        <img src="/arrow1.png" className="absolute top-[20px] left-[370px] max-sm:hidden"/>
        <img src="/arrow2.png" className="absolute top-[170px] left-[-120px] max-sm:hidden"/>

      {cards.map((item, index) => (
        <div key={index} className={cn("flex gap-4 ", item.className)}>
          <div>
            <img src={item.icon} className="w-[80px]" />
          </div>
          <div className="w-[300px]">
            <h3 className="font-bold text-[22px]">{item.title}</h3>
            <p className="text-[14px] leading-[30px] text-gray-400">
              {item.subTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
