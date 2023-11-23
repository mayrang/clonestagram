import React from "react";
import { RiSearchLine } from "react-icons/ri";

import { RiSearchFill } from "react-icons/ri";
type Props = {
  isSelected: boolean;
};

export default function SearchIcon({ isSelected }: Props) {
  return <div>{isSelected ? <RiSearchFill className="w-7 h-7" /> : <RiSearchLine className="w-7 h-7" />}</div>;
}
