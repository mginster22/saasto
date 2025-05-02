"use cllient";
import React from "react";

interface CustomSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CustomSwitch: React.FC<CustomSwitchProps> = ({ checked, onChange }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
        checked ? "bg-[#ed9b91]" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-[#FF553E] transition-transform duration-300 ${
          checked ? "translate-x-6 bg-[#FF553E]" : ""
        }`}
      />
    </button>
  );
};
