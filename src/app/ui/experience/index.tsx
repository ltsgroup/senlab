"use client";
import Image from "next/image";
import React from "react";

import CardInfo from "../homepage/CardInfo";
import LLAMACard from "@/homepage/LLAMA_Card.jpg";

function ExperiencePage() {
  return (
    <div className="bg-bgColor">
      <div className="max-md:pt-12 lg:pb-2 lg:pt-24 max-lg:pb-16 md:pt-[120px]">
        <div className="flex flex-col items-center justify-center text-center max-w-[1600px] mx-auto px-[72px] max-lg:px-6">
          <div className="w-2/3 max-md:w-full flex flex-col flex-wrap items-center">
            <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33]">
              Discover
              <br />
              Explore next generation AI
            </h2>

            <div className="w-4/6 max-md:w-full flex flex-wrap flex-col items-start">
              <div className="text-center text-[#465a69] text-base tracking-normal leading-[150%] my-4">
                <p>
                  Discover our latest demos. See how we’re shaping the future.
                  Hear how AI can transform our world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 lg:pt-24 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="pt-16 lg:pt-24 w-full"></div>
      <div className="max-w-[1349px] mx-auto flex flex-col flex-wrap">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33] text-center">
          Demos
        </h2>

        <div className="text-[#465a69] text-center">
          <p>The home for AI Experiments at Senlab</p>
        </div>

        <div className="pt-14 lg:pt-20 w-full"></div>
        <div className="flex max-md:flex-col items-stretch gap-12 px-6 lg:px-[72px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardInfo
              key={i}
              rotate45Deg
              swapIcon
              opacityHover={false}
              textButtonWithIcon="Try it"
              title={`Blog ${i + 1}`}
              content="More flexible, adaptable, and personalized Al systems. We see enormous potential for Al to help in every field of work"
              customClassTextButtonArrow="text-white text-sm"
              customClassIconArrow="text-white border-white text-sm"
              rootClassNameButtonArrow="bg-black px-4 py-2 rounded-full gap-2 hover:scale-110"
              customClassTitle="md:text-2xl text-xl tracking-[.01em]"
              subTag="Language AI"
              media={
                <Image
                  src={LLAMACard}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              }
            />
          ))}
        </div>
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="pt-16 lg:pt-24 w-full"></div>
      <div className="max-w-[1349px] mx-auto flex flex-col flex-wrap">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33] text-center">
          3D Rendering
        </h2>

        {/* TODO: add 3D rendering */}
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>
    </div>
  );
}

export default ExperiencePage;
