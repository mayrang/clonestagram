import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

type Props = {
  isSelected: boolean;
};

export default function HomeIcon({ isSelected }: Props) {
  return <div>{isSelected ? <AiFillHome className="w-7 h-7" /> : <AiOutlineHome className="w-7 h-7" />}</div>;
}
