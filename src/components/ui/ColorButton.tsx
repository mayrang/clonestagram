import React from "react";

type Props = {
  onClick: () => void;
  text: string;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 rounded-md overflow-hidden p-[0.2rem]">
      <button onClick={onClick} className="bg-white w-full h-full p-[0.4rem] hover:bg-opacity-90 transition-opacity">
        {text}
      </button>
    </div>
  );
}
