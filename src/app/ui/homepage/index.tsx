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
];

const HomePage = () => {
  return (
    <div className="bg-white">
      <BannerVideo
        videoUrl={"/homepage/video_penguin.mp4"}
        text={
          <div className="flex flex-col gap-5 items-center justify-center text-white">
            <h1 className="lg:text-[64px] md:text-5xl text-4xl font-bold text-center">
              Setting a new standard for
              <br />
              immersive AI content
            </h1>
            <div className="flex items-center gap-5 font-bold flex-wrap justify-center">
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
          <p className="text-black font-extrabold text-xs">
            PRODUCT EXPERIENCES
          </p>
          <h2 className="text-5xl text-[#1c2b33] text-center">
            Innovation from AI at Meta
          </h2>
        </div>
        <div className="text-[#465a69] text-center">
          We believe AI is for everyone. Explore our latest product
          <br />
          releases and start engaging with these AI experiences
          <br />
          today across our family of apps.
        </div>
      </div>
      <div className="pt-12"></div>

      <div className="max-w-[1349px] mx-auto flex flex-col items-center gap-12 px-6 lg:px-28 md:flex-row">
        <CardInfo
          tag="META AI"
          header="Learn, create and do more with Meta AI"
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
              className="w-full h-auto object-cover"
            />
          }
        />
        <CardInfo
          tag="META AI"
          header="Learn, create and do more with Meta AI"
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
              className="w-full h-auto object-cover"
            />
          }
        />
      </div>
      <div className="pt-14 lg:pt-20 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="pt-14 lg:pt-20 w-full"></div>
      <div className="max-w-[1349px] mx-auto flex items-center gap-12 px-6 lg:px-[72px]">
        <CardInfo
          horizontal
          rotate45Deg
          tag="LLAMA"
          header="Build the future of AI with Llama 3.2"
          textButton="Download models"
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
              className="w-full h-auto object-cover"
            />
          }
          customClassHeader="md:text-4xl tracking-[.01em]"
        />
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>

      <BannerVideo
        videoUrl={"/homepage/video_building_AI.mp4"}
        text={
          <div className="">
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-medium text-center text-black">
              Building AI experiences <br /> for everyone
            </h2>
            <p className="p-12 text-[#465a69] text-center">
              Built openly and intelligently with Llama 3.2, our newest
              <br />
              experiences make AI more engaging for anyone to use. From
              <br />
              making your own AIs to having Meta AI identify what’s around
              <br />
              you, our leading AI features help you learn, create and do more
              <br />
              than ever.
            </p>
          </div>
        }
      />

      <div className="pt-12 lg:pt-24 w-full"></div>
      <div className="max-w-[1600px] text-center mx-auto">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] text-[#1c2b33]">
          Latest AI news
        </h2>
        <div className="pt-6 w-full"></div>
        <div className="flex justify-center">
          <ButtonLinkIncludeArrow text={"Visit blog"} rotate45Deg={false} />
        </div>
      </div>
      <div className="pt-8 lg:pt-12 w-full"></div>

      <div className="max-w-[1349px] mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-6">
        {latest_ai_news_data?.map((v, i) => {
          return (
            <CardInfo
              key={i}
              textButtonWithIcon={v?.textButtonWithIcon}
              rotate45Deg={v?.rotate45Deg}
              header={v?.header}
              media={
                <Image
                  src={v?.imgUrl}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              }
            />
          );
        })}
      </div>
      <div className="pt-6 lg:pt-20 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="flex flex-col items-center justify-center gap-5 py-16 lg:py-24 px-6 lg:px-0">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="md:text-5xl md:tracking-[0.012em] tracking-[0.01em] text-5xl text-[#1c2b33]">
            Stay informed about AI at Meta
          </h2>
        </div>
        <div className="text-[#465a69] text-center">
          Subscribe to our newsletter to stay up to date with
          <br />
          the latest AI updates, releases and more.
        </div>
        <button className="rounded-3xl bg-[#0E6CE5] px-5 py-3 text-white font-bold tracking-[.005em] leading-[150%]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default HomePage;
