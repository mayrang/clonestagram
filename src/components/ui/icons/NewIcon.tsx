import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
type Props = {
  isSelected: boolean;
};

export default function NewIcon({ isSelected }: Props) {
  return <div>{isSelected ? <BsPlusSquareFill className="w-7 h-7" /> : <BsPlusSquare className="w-7 h-7" />}</div>;
}
