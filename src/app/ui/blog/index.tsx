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
import { useHref } from "@/hook/href";

interface FeaturedComponentProps {
  imgUrl: StaticImageData | string;
  title: string;
  href: string;
  alt: string;
  rootClassName?: string;
}

function BlogPage() {
  const createHref = useHref();

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
          "group relative flex h-[clamp(18rem,25vw,64rem)] w-full flex-col rounded-3xl bg-[#cc785c] px-6 py-5 no-underline",
          rootClassName,
        )}
      >
        <Image
          src={imgUrl}
          alt={alt}
          sizes="(max-width: 699px) 100vw, 33vw"
          className="absolute left-0 right-0 top-[-10%] mx-auto h-[95%] scale-95 object-contain transition-transform delay-0 duration-300 ease-in-out group-hover:scale-105"
          width={800}
          height={800}
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-base tracking-[-.0005em]">Featured paper</div>
          <div className="mt-2 text-[clamp(1.25rem,1.67vw,1.5rem)] font-semibold leading-[125%] tracking-[-.0225em]">
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

      <div className="w-full pt-16 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1600px] flex-col flex-wrap">
        <h2 className="mb-4 text-center text-4xl tracking-[0.01em] text-[#1c2b33] md:text-5xl md:tracking-[0.012em]">
          Featured
        </h2>

        <div className="w-full pt-14 lg:pt-20"></div>
        <div className="px-20 py-12 max-md:px-6">
          <div className="mb-8 flex flex-wrap gap-8 max-md:flex-col">
            <div className="flex-[3]">
              <FeaturedComponent
                alt="LLAMA_Card"
                href={createHref(
                  "blog/Mapping the Mind of a Large Language Model",
                )}
                imgUrl={LLM}
                title="Mapping the Mind of a Large Language Model"
              />
            </div>
            <div className="flex-[1.5]">
              <FeaturedComponent
                alt="align_LLM"
                href={createHref(
                  "blog/Alignment faking in large language models",
                )}
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
                href={createHref(
                  "blog/Constitutional Classifiers: Defending against universal jailbreaks",
                )}
                imgUrl={constitutional_classifiers}
                title="Constitutional Classifiers: Defending against universal jailbreaks"
                rootClassName="bg-[#ebdbbc]"
              />
            </div>
            <div className="flex-1">
              <FeaturedComponent
                alt="align_LLM"
                href={createHref(
                  "blog/Measuring the Persuasiveness of Language Models",
                )}
                imgUrl={measuring}
                title="Measuring the Persuasiveness of Language Models"
                rootClassName="bg-[#f0eee6]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-16 lg:pt-24"></div>

      <hr className="my-1 h-[1px] w-full border-none bg-[#dadde1] text-[#dadde1]" />

      <div className="w-full pt-16 lg:pt-24"></div>
      <div className="mx-auto flex max-w-[1600px] flex-col flex-wrap px-20 py-12 max-md:px-6">
        <h2 className="text-left text-4xl tracking-[0.01em] text-[#1c2b33] md:text-5xl md:tracking-[0.012em]">
          Publications
        </h2>

        <div className="w-full py-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl border-none bg-[#FFFFFF] px-4 py-3 shadow-[0_0_0_1px_#e8e6dc] focus:shadow-[0_0_0_2px_#5e5d59] focus:outline-none focus:ring-0"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-400">
              <MaterialSymbolsSearch />
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          {Array.from({ length: 30 }).map((_, i) => {
            return (
              <Link
                key={i}
                href={createHref(
                  `blog/Forecasting rare language model behaviors ${i + 1}`,
                )}
                target="_blank"
                className="w-full border-t border-solid border-[#141413] bg-transparent transition-transform delay-0 duration-300 ease-in-out last:border-b hover:scale-[1.025]"
              >
                <div className="flex pb-8 pt-6 md:items-center md:justify-between max-md:flex-col max-md:gap-[6px]">
                  <div className="flex flex-1 justify-between max-md:flex-col-reverse max-md:gap-[6px]">
                    <div className="text-base font-semibold leading-[150%] tracking-[-0.005em]">
                      Forecasting rare language model behaviors {i + 1}
                    </div>
                    <div>Alignment</div>
                    <div />
                  </div>
                  <div className="flex-none leading-[150%] tracking-[-0.005em] text-[#b0aea5]">
                    <span>Feb 26, 2025</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full pt-16 lg:pt-24"></div>
    </div>
  );
}

export default BlogPage;
