import { title } from "process";
import React from "react";

interface Props {
  className?: string;
}

const cards = [
  {
    icon: "/1.png",
    title: "Automatic event tracking",
    subTitle: "Time Tracking is never been easier.Just let the stopwatch run",
  },
  {
    icon: "/2.png",
    title: "Customizable dashboard",
    subTitle: "Time Tracking is never been easier.Just let the stopwatch run",
  },
  {
    icon: "/3.png",
    title: "Statistics retroactively",
    subTitle: "Time Tracking is never been easier.Just let the stopwatch run",
  },
];

export const AnalyticsBlockCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {cards.map((item, index) => (
        <div key={index} className="flex gap-4 ">
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
