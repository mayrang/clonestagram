import React from "react";

type Props = {
  onClick: () => void;
  text: string;
  isBig?: boolean;
};

export default function ColorButton({ text, onClick, isBig = false }: Props) {
  return (
    <div
      className={`bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 rounded-md overflow-hidden  ${
        isBig ? "p-[0.4rem]" : "p-[0.2rem]"
      }`}
    >
      <button
        onClick={onClick}
        className={`bg-white w-full h-full ${
          isBig ? "p-4 text-2xl" : "p-[0.4rem] text-base"
        }  hover:bg-opacity-90 transition-opacity`}
      >
        {text}
      </button>
    </div>
  );
}
