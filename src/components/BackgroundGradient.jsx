"use client";
import { BackgroundGradient } from "./ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] bg-white flex justify-center">
        <img
          src="https://www.mydesignation.com/wp-content/uploads/2020/02/golden-yellow-plain-tshirt-mydesignation.jpg"
          alt="jordans"
          className="rounded-[22px] h-full w-full"
        />
      </BackgroundGradient>
    </div>
  );
}
