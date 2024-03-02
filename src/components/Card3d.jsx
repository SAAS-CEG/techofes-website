"use client";
import { BackgroundGradientDemo } from "./BackgroundGradient";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function ThreeDCardDemo({ img }) {
  return (
    <CardContainer className="inter-var cursor-pointer">
      <CardBody className="rounded-[25px] bg-transparent flex items-center justify-center relative w-60 h-20 md:w-96 md:h-60 -top-14">
        <CardItem
          translateZ="100"
          className="w-full h-full flex flex-col rounded-[100%]"
        >
          <BackgroundGradientDemo img={img} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
