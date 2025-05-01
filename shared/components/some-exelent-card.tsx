import React from "react";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

const cards = [
  {
    icon: "/calendar.png",
    bgColor: "bg-[#70D0DC]",
    title: "Preset List of Task",
    subTitle: "Make bill payments easily using the wallet app",
  },
  {
    icon: "/calendar2.png",
    bgColor: "bg-[#7562E0]",
    title: "Reminder of Task",
    subTitle: "Make bill payments easily using the wallet app",
  },
  {
    icon: "/calendar3.png",
    bgColor: "bg-[#FA865F]",
    title: "Complecation Report",
    subTitle: "Make bill payments easily using the wallet app",
  },
];
export const SomeExelentCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-8 mt-10", className)}>
      {cards.map((item, index) => (
        <div
          key={index}
          className={cn(
            `${item.bgColor} relative flex flex-col w-[370px] h-[250px] rounded-4xl justify-start`,
          )}
        >
            <img src={item.icon} className="w-[150px] " />

          <div className="w-[303px]  absolute bottom-[40px] left-6">
            <h3 className="font-bold text-white text-[24px]">{item.title}</h3>
            <p className="text-gray-100 text-[14px]">{item.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
