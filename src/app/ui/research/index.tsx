"use client";
import Image from "next/image";
import React from "react";

import o3_mini_11 from "@/research/o3-mini_1.1.webp";
import o1_11 from "@/research/o1_1.1.webp";
import o1_mini_11 from "@/research/o1-mini_1.1.webp";
import CardInfo from "../homepage/CardInfo";
import LLAMACard from "@/homepage/LLAMA_Card.jpg";
import ProjectCard from "./ProjectCard";

const dataAI = [
  {
    title: "Introducing o3‑mini with faster reasoning",
    timeRelease: "2025-01-31",
    timeRead: "6",
    imgUrl: o3_mini_11,
  },
  {
    title: "Learning to reason with LLMs",
    timeRelease: "2024-09-12",
    timeRead: "6",
    imgUrl: o1_11,
  },
  {
    title: "Advancing cost-efficient reasoning",
    timeRelease: "2024-09-12",
    timeRead: "6",
    imgUrl: o1_mini_11,
  },
];

function ResearchPage() {
  return (
    <div className="bg-bgColor">
      <div className="max-md:pt-12 lg:pb-2 lg:pt-24 max-lg:pb-16 md:pt-[120px]">
        <div className="flex flex-col items-center justify-center text-center max-w-[1600px] mx-auto px-[72px] max-lg:px-6">
          <div className="w-1/2 max-md:w-full flex flex-col flex-wrap items-center">
            <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33]">
              Beyond Boundaries: AI Research at the Frontier of Innovation
            </h2>

            <div className="w-4/6 max-md:w-full flex flex-wrap flex-col items-start">
              <div className="text-center text-[#465a69] text-base tracking-normal leading-[150%] my-4">
                <p>
                  We&apos;re building a future where everyone has access to the
                  knowledge and tools to make Al work for their unique needs and
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 lg:pt-24 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="pt-16 lg:pt-24 w-full"></div>
      <div className="flex flex-col flex-wrap items-center px-6 lg:px-[72px] max-w-[1349px] mx-auto">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33] text-center">
          Research Projects
        </h2>

        <div className="pt-14 lg:pt-20 w-full"></div>
        <div className="max-w-[1349px] mx-auto flex max-md:flex-col items-stretch gap-12 cursor-pointer">
          {dataAI.map((v, i) => (
            <ProjectCard
              key={i}
              url={""}
              imgUrl={v?.imgUrl}
              timeRead={v?.timeRead}
              timeRelease={v?.timeRelease}
              title={v?.title}
            />
          ))}
        </div>
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="pt-16 lg:pt-24 w-full"></div>
      <div className="flex flex-col flex-wrap items-center px-6 lg:px-[72px] max-w-[1349px] mx-auto">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33] text-center">
          AI That works for everyone
        </h2>

        <div className="w-4/6 max-md:w-full flex flex-wrap flex-col items-start">
          <div className="text-center text-[#465a69] text-base tracking-normal leading-[150%] my-4">
            <p>
              Emphasis on human-Al collaboration. Instead of focusing solely on
              making fully autonomous Al systems, we are excited to build
              multimodal systems that work with people collaboratively.
              <br />
              <br />
              More flexible, adaptable, and personalized Al systems. We see
              enormous potential for Al to help in every field of work. While
              current systems excel at programming and mathematics, we&apos;re
              building Al that can adapt to the full spectrum of human expertise
              and enable a broader spectrum of applications.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="pt-16 lg:pt-24 w-full"></div>
      <div className="max-w-[1349px] mx-auto flex flex-col flex-wrap">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33] text-center">
          Blogs
        </h2>

        <div className="pt-14 lg:pt-20 w-full"></div>
        <div className="flex max-md:flex-col items-stretch gap-12 px-6 lg:px-[72px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardInfo
              key={i}
              textButtonWithIcon="Learn more"
              title={`Blog ${i + 1}`}
              media={
                <Image
                  src={LLAMACard}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              }
              customClassTitle="md:text-2xl text-xl tracking-[.01em]"
            />
          ))}
        </div>
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>
    </div>
  );
}

export default ResearchPage;
