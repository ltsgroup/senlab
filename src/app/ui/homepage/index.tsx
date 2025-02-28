"use client";
import React from "react";
import Image from "next/image";

import BannerVideo from "./BannerVideo";
import AIStudioIMGPath from "@/homepage/ai_studio.jpg";
import LLAMACard from "@/homepage/LLAMA_Card.jpg";
import latest_ai_news from "@/homepage/latest_ai_news.jpg";
// import video_building_AI from "@/homepage/video_building_AI.mp4";
// import video_penguin from "@/homepage/video_penguin.mp4";
import CardInfo from "./CardInfo";
import ButtonLinkIncludeArrow from "@/app/ui/components/common/ButtonLinkIncludeArrow";

const latest_ai_news_data = [
  {
    header:
      "How Meta Movie Gen could usher in a new AI-enabled era for content creators",
    textButtonWithIcon: "Read post",
    rotate45Deg: false,
    imgUrl: latest_ai_news,
  },
  {
    header:
      "Meta newsroom: Meta’s AI Products Just Got Smarter and More Useful",
    textButtonWithIcon: "Read post",
    rotate45Deg: true,
    imgUrl: latest_ai_news,
  },
  {
    header:
      "Llama 3.2: Revolutionizing edge AI and vision with open, customizable models",
    textButtonWithIcon: "Read post",
    rotate45Deg: false,
    imgUrl: latest_ai_news,
  },
  {
    header:
      "Llama 3.2: Revolutionizing edge AI and vision with open, customizable models",
    textButtonWithIcon: "Read post",
    rotate45Deg: true,
    imgUrl: latest_ai_news,
  },
];

const HomePage = () => {
  return (
    <div className="bg-bgColor">
      <BannerVideo
        videoUrl={"/homepage/video_penguin.mp4"}
        text={
          <div className="flex flex-col items-center justify-center gap-5 text-white">
            <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-[56px] max-md:mx-6">
              Researching AI at the frontier
            </h2>
            <h3 className="text-center text-2xl font-bold !leading-[120%] md:text-3xl lg:text-[40px] max-md:mx-6">
              We, Senlab, focuses on three major aspects of AI:
              <br />
              safety, alignment, and innovation
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-5 font-bold">
              <button className="rounded-3xl bg-[#0E6CE5] px-5 py-3 text-white">
                Learn more
              </button>
              <ButtonLinkIncludeArrow
                text={"Download paper"}
                rotate45Deg={false}
                opacityHover={false}
                customClassText="text-white"
                customClassIconArrow="border-white text-white"
              />
            </div>
          </div>
        }
      />

      <div className="pt-24"></div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs font-extrabold text-black">
            PRODUCT EXPERIENCES
          </p>
          <h2 className="text-center text-5xl">Innovation from AI at Meta</h2>
        </div>
        <div className="text-center text-[#465a69]">
          We believe AI is for everyone. Explore our latest product
          <br />
          releases and start engaging with these AI experiences
          <br />
          today across our family of apps.
        </div>
      </div>
      <div className="pt-12"></div>

      <div className="mx-auto flex max-w-[1349px] flex-col items-stretch gap-12 px-6 md:flex-row lg:px-28">
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <CardInfo
              key={i}
              tag="META AI"
              title="Learn, create and do more with Meta AI"
              textButton="Ask Meta AI anything"
              textButtonWithIcon="Learn more"
              content={`
            Use Meta AI to explore the world around you and bring your visions to
            life. Try our newest features to ask about photos or have a
            conversation using just your voice.
            `}
              media={
                <Image
                  src={AIStudioIMGPath}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              }
            />
          );
        })}
      </div>
      <div className="w-full pt-14 lg:pt-20"></div>

      <hr className="my-1 h-[1px] w-full border-none bg-[#dadde1] text-[#dadde1]" />

      <div className="w-full pt-14 lg:pt-20"></div>
      <div className="mx-auto flex max-w-[1349px] items-stretch gap-12 px-6 lg:px-[72px] max-md:flex-col">
        {Array.from({ length: 2 }).map((_, i) => (
          <CardInfo
            key={i}
            horizontal
            rotate45Deg
            titleOnTop
            tag="LLAMA"
            title="Build the future of AI with Llama 3.2"
            // textButton="Download models"
            textButtonWithIcon="Learn more"
            content={`
              We’re expanding our latest release of Llama 3.1 to now offer Llama 3.2 models in 1B, 3B, 11B and 90B. 
              You can get started immediately with our Llama ecosystem and partner network.
            `}
            media={
              <Image
                src={LLAMACard}
                alt={""}
                width={1000}
                height={1000}
                className="h-auto w-full object-cover"
              />
            }
            customClassTitle="md:text-4xl tracking-[.01em]"
          />
        ))}
      </div>
      <div className="w-full pt-16 lg:pt-24"></div>

      <BannerVideo
        videoUrl={"/homepage/video_building_AI.mp4"}
        text={
          <div className="">
            <h2 className="text-center text-4xl font-medium text-black md:text-5xl lg:text-6xl">
              Building AI experiences <br /> for everyone
            </h2>
            <p className="p-12 text-center text-[#465a69]">
              We build, enable, and advocate for open innovation across the
              <br /> Al technology landscape, including software, data and
              models,
              <br />
              safety, security and trust, tooling, evaluation, hardware,
              <br />
              education, open science, and advocacy.
            </p>
          </div>
        }
      />

      <div className="w-full pt-12 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-center gap-2">
        <p className="text-xs font-extrabold text-black">Latest publications</p>
        <h2 className="text-4xl tracking-[0.01em] md:text-5xl md:tracking-[0.012em]">
          Stay up-to-date with the lastest news
        </h2>
        <div className="w-full pt-6"></div>
        {/* <div className="flex justify-center">
          <ButtonLinkIncludeArrow text={"Visit blog"} rotate45Deg={false} />
        </div> */}
      </div>
      <div className="w-full pt-8 lg:pt-12"></div>

      <div className="mx-auto flex max-w-[1349px] flex-col items-stretch gap-8 px-6 md:gap-12 lg:flex-row">
        {latest_ai_news_data?.map((v, i) => {
          return (
            <CardInfo
              key={i}
              textButtonWithIcon={v?.textButtonWithIcon}
              rotate45Deg={v?.rotate45Deg}
              title={v?.header}
              media={
                <Image
                  src={v?.imgUrl}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              }
            />
          );
        })}
      </div>
      <div className="w-full pt-6 lg:pt-20"></div>
    </div>
  );
};

export default HomePage;
