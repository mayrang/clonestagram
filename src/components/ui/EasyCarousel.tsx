"use client";
import React, { useState, useEffect, useRef } from "react";

type Props = {
  viewItem?: number;
  showArrow?: boolean;
  showDot?: boolean;
  children: React.ReactNode;
};

export default function EasyCarousel({ viewItem = 3, showArrow = true, showDot = true, children }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentArray, setCurrentArray] = useState(setCarouselArray(childrenArray, viewItem));
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const updateWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setItemWidth(Math.round(containerRef.current.offsetWidth / viewItem));
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  console.log("width", containerWidth, childrenArray);

  return (
    <div className=" w-full h-full  overflow-hidden " id="easy-carousel-container" ref={containerRef}>
      <div className={`flex items-center overflow-hidden m-auto relative justify-between `}>
        {currentArray.map((item, index) => (
          <div
            key={`${item.key} ${index}`}
            style={{ width: itemWidth }}
            className={` grow  shrink-0 flex justify-center`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function setCarouselArray(arr: any[], count: number) {
  let carouselArray: any[] = [...arr];
  const reverseArray = [...arr].reverse();

  for (let i = 0; i < count; i++) {
    carouselArray = [reverseArray[i % arr.length], ...carouselArray, arr[i % arr.length]];
  }
  return carouselArray;
}
