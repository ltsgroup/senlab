"use client";
import React from "react";
import BannerVideo from "../homepage/BannerVideo";
import ButtonLinkIncludeArrow from "../components/common/ButtonLinkIncludeArrow";
import Section3 from "../components/home/Section3";

function TeamPage() {
  return (
    <div className="bg-bgColor">
      <BannerVideo
        videoUrl={"/homepage/video_penguin.mp4"}
        text={
          <div className="flex flex-col gap-5 items-center justify-center text-white">
            <h1 className="lg:text-[64px] md:text-5xl text-4xl font-bold text-center max-md:mx-6">
              Researching AI at the frontier
              <br />
              We, Senlab, focuses on three major aspects of AI: safety,
              alignment, and innovation
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

      <div>
        <Section3
          desc="Behind every groundbreaking AI tool is a team of visionaries committed to shaping the future. Here’s who started it all."
          title="The Minds Behind The Machines"
          titleMobile="The Minds Behind The Machines"
        />
      </div>
    </div>
  );
}

export default TeamPage;
