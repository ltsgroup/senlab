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
      <div className="md:pt-[120px] lg:pb-2 lg:pt-24 max-md:pt-12 max-lg:pb-16">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-center px-[72px] text-center max-lg:px-6">
          <div className="flex w-1/2 flex-col flex-wrap items-center max-md:w-full">
            <h2 className="mb-4 text-4xl tracking-[0.01em] md:text-5xl md:tracking-[0.012em]">
              Beyond Boundaries: AI Research at the Frontier of Innovation
            </h2>

            <div className="flex w-4/6 flex-col flex-wrap items-start max-md:w-full">
              <div className="my-4 text-center text-base leading-[150%] tracking-normal text-[#465a69]">
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
      <div className="w-full pt-0 lg:pt-24"></div>

      <hr className="my-1 h-[1px] w-full border-none bg-[#dadde1] text-[#dadde1]" />

      <div className="w-full pt-16 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1349px] flex-col flex-wrap items-center px-6 lg:px-[72px]">
        <h2 className="mb-4 text-center text-4xl tracking-[0.01em] md:text-5xl md:tracking-[0.012em]">
          Research Projects
        </h2>

        <div className="w-full pt-14 lg:pt-20"></div>
        <div className="mx-auto flex max-w-[1349px] cursor-pointer items-stretch gap-12 max-md:flex-col">
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
      <div className="w-full pt-16 lg:pt-24"></div>

      <hr className="my-1 h-[1px] w-full border-none bg-[#dadde1] text-[#dadde1]" />

      <div className="w-full pt-16 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1349px] flex-col flex-wrap items-center px-6 lg:px-[72px]">
        <h2 className="mb-4 text-center text-4xl tracking-[0.01em] md:text-5xl md:tracking-[0.012em]">
          AI That works for everyone
        </h2>

        <div className="flex w-4/6 flex-col flex-wrap items-start max-md:w-full">
          <div className="my-4 text-center text-base leading-[150%] tracking-normal text-[#465a69]">
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
      <div className="w-full pt-16 lg:pt-24"></div>

      <hr className="my-1 h-[1px] w-full border-none bg-[#dadde1] text-[#dadde1]" />

      <div className="w-full pt-16 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1349px] flex-col flex-wrap">
        <h2 className="mb-4 text-center text-4xl tracking-[0.01em] md:text-5xl md:tracking-[0.012em]">
          Blogs
        </h2>

        <div className="w-full pt-14 lg:pt-20"></div>
        <div className="flex items-stretch gap-12 px-6 lg:px-[72px] max-md:flex-col">
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
                  className="h-auto w-full object-cover"
                />
              }
              customClassTitle="md:text-2xl text-xl tracking-[.01em]"
            />
          ))}
        </div>
      </div>
      <div className="w-full pt-16 lg:pt-24"></div>
    </div>
  );
}

export default ResearchPage;
