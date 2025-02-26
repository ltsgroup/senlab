"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import LLM from "@/blog/LLM.webp";
import align_LLM from "@/blog/align_LLM.webp";
import constitutional_classifiers from "@/blog/constitutional_classifiers.webp";
import measuring from "@/blog/measuring.webp";
import BannerVideo from "../homepage/BannerVideo";
import { cn } from "@/util/utils";
import MaterialSymbolsSearch from "@/icons/MaterialSymbolsSearch";

interface FeaturedComponentProps {
  imgUrl: StaticImageData | string;
  title: string;
  href: string;
  alt: string;
  rootClassName?: string;
}

function BlogPage() {
  function FeaturedComponent({
    imgUrl,
    title,
    href,
    alt,
    rootClassName = "",
  }: FeaturedComponentProps) {
    return (
      <Link
        href={href}
        target="_blank"
        className={cn(
          "flex flex-col w-full h-[clamp(18rem,25vw,64rem)] bg-[#cc785c] rounded-3xl relative group px-6 py-5 no-underline",
          rootClassName,
        )}
      >
        <Image
          src={imgUrl}
          alt={alt}
          sizes="(max-width: 699px) 100vw, 33vw"
          className="absolute h-[95%] mx-auto left-0 right-0 top-[-10%] scale-95 group-hover:scale-105 transition-transform delay-0 duration-300 ease-in-out object-contain"
          width={800}
          height={800}
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-base tracking-[-.0005em]">Featured paper</div>
          <div className="mt-2 text-[clamp(1.25rem,1.67vw,1.5rem)] tracking-[-.0225em] leading-[125%] font-semibold">
            {title}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-bgColor">
      <BannerVideo
        videoUrl={"/blog/20250226_1552_Lotus_River_Message_simple_compose.mp4"}
        text={""}
      />

      <div className="pt-16 lg:pt-24 w-full"></div>
      <div className="max-w-[1600px] mx-auto flex flex-col flex-wrap">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] mb-4 text-[#1c2b33] text-center">
          Featured
        </h2>

        <div className="pt-14 lg:pt-20 w-full"></div>
        <div className="px-20 py-12 max-md:px-6">
          <div className="flex flex-wrap gap-8 mb-8 max-md:flex-col">
            <div className="flex-[3]">
              <FeaturedComponent
                alt="LLAMA_Card"
                href=""
                imgUrl={LLM}
                title="Mapping the Mind of a Large Language Model"
              />
            </div>
            <div className="flex-[1.5]">
              <FeaturedComponent
                alt="align_LLM"
                href=""
                imgUrl={align_LLM}
                title="Alignment faking in large language models"
                rootClassName="bg-[#d1cfc5]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-8 max-md:flex-col">
            <div className="flex-1">
              <FeaturedComponent
                alt="LLAMA_Card"
                href=""
                imgUrl={constitutional_classifiers}
                title="Constitutional Classifiers: Defending against universal jailbreaks"
                rootClassName="bg-[#ebdbbc]"
              />
            </div>
            <div className="flex-1">
              <FeaturedComponent
                alt="align_LLM"
                href=""
                imgUrl={measuring}
                title="Measuring the Persuasiveness of Language Models"
                rootClassName="bg-[#f0eee6]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="pt-16 lg:pt-24 w-full"></div>
      <div className="max-w-[1600px] mx-auto flex flex-col flex-wrap px-20 py-12 max-md:px-6">
        <h2 className="md:text-5xl md:tracking-[0.012em] text-4xl tracking-[0.01em] text-[#1c2b33] text-left">
          Publications
        </h2>

        <div className="py-8 w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl bg-[#FFFFFF] px-4 py-3 border-none focus:outline-none focus:ring-0 shadow-[0_0_0_1px_#e8e6dc] focus:shadow-[0_0_0_2px_#5e5d59]"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer">
              <MaterialSymbolsSearch />
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          {Array.from({ length: 30 }).map((_, i) => {
            return (
              <Link
                key={i}
                href={""}
                className="bg-transparent w-full last:border-b border-t border-solid border-[#141413] hover:scale-[1.025] transition-transform delay-0 duration-300 ease-in-out"
              >
                <div className="flex max-md:flex-col md:items-center md:justify-between pt-6 pb-8 max-md:gap-[6px]">
                  <div className="flex flex-1 justify-between max-md:flex-col-reverse max-md:gap-[6px]">
                    <div className="text-base tracking-[-0.005em] leading-[150%] font-semibold">
                      Forecasting rare language model behaviors {i + 1}
                    </div>
                    <div>Alignment</div>
                    <div />
                  </div>
                  <div className="flex-none tracking-[-0.005em] leading-[150%] text-[#b0aea5]">
                    <span>Feb 26, 2025</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="pt-16 lg:pt-24 w-full"></div>
    </div>
  );
}

export default BlogPage;
