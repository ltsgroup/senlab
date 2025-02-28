"use client";
import Image from "next/image";
import React from "react";

import CardInfo from "../homepage/CardInfo";
import LLAMACard from "@/homepage/LLAMA_Card.jpg";

function ExperiencePage() {
  return (
    <div className="bg-bgColor">
      <div className="md:pt-[120px] lg:pb-2 lg:pt-24 max-md:pt-12 max-lg:pb-16">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-center px-[72px] text-center max-lg:px-6">
          <div className="flex w-2/3 flex-col flex-wrap items-center max-md:w-full">
            <h2 className="mb-4 text-4xl tracking-[0.01em] text-[#1c2b33] md:text-5xl md:tracking-[0.012em]">
              Discover
              <br />
              Explore next generation AI
            </h2>

            <div className="flex w-4/6 flex-col flex-wrap items-start max-md:w-full">
              <div className="my-4 text-center text-base leading-[150%] tracking-normal text-[#465a69]">
                <p>
                  Discover our latest demos. See how we’re shaping the future.
                  Hear how AI can transform our world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-0 lg:pt-24"></div>

      <hr className="my-1 h-[1px] w-full border-none bg-[#dadde1] text-[#dadde1]" />

      <div className="w-full pt-16 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1349px] flex-col flex-wrap">
        <h2 className="mb-4 text-center text-4xl tracking-[0.01em] text-[#1c2b33] md:text-5xl md:tracking-[0.012em]">
          Demos
        </h2>

        <div className="text-center text-[#465a69]">
          <p>The home for AI Experiments at Senlab</p>
        </div>

        <div className="w-full pt-14 lg:pt-20"></div>
        <div className="flex items-stretch gap-12 px-6 lg:px-[72px] max-md:flex-col">
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
                  className="h-auto w-full object-cover"
                />
              }
            />
          ))}
        </div>
      </div>
      <div className="w-full pt-16 lg:pt-24"></div>

      <hr className="my-1 h-[1px] w-full border-none bg-[#dadde1] text-[#dadde1]" />

      <div className="w-full pt-16 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1349px] flex-col flex-wrap">
        <h2 className="mb-4 text-center text-4xl tracking-[0.01em] text-[#1c2b33] md:text-5xl md:tracking-[0.012em]">
          3D Rendering
        </h2>

        {/* TODO: add 3D rendering */}
      </div>
      <div className="w-full pt-16 lg:pt-24"></div>
    </div>
  );
}

export default ExperiencePage;
