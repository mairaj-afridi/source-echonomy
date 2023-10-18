"use client";
import { ReactNode } from "react";

type Props = {
  text: string;
  style: string;
  icon?: ReactNode;
  onClick: () => void;
  type?: "submit" | "button"
};

const Button = ({ text, style = "bg-brand-primary", icon, onClick, type = "button" }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-4 text-white-600 md:text-[16px] text-[14px] leading-[16px] whitespace-nowrap rounded-full overflow-hidden flex justify-center items-center transition-all duration-300 hover:bg-brand-secondary gap-3 ${style}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
