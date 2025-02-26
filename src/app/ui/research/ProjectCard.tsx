"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

import dayjs from "dayjs";

interface ProjectCardProps {
  /**
   * The title of the project.
   */
  title: string;

  /**
   * The release date of the project in string format.
   */
  timeRelease: string;

  /**
   * The estimated reading time in minutes.
   */
  timeRead: string;

  /**
   * The URL to navigate to when the card is clicked.
   */
  url: string;

  /**
   * The image source for the project.
   * Can be a static import (`StaticImageData`) or a string URL.
   */
  imgUrl: StaticImageData | string;
}

function ProjectCard({
  url,
  imgUrl,
  timeRead,
  timeRelease,
  title,
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      className="flex flex-col flex-wrap items-start min-w-[1/3] group h-full"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={imgUrl}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-auto object-cover group-hover:scale-125 transition-transform duration-500 delay-0 ease-in-out"
        />
      </div>
      <div className="flex flex-col flex-wrap items-start pt-4 w-full">
        <div className="mb-4 md:pr-8 font-medium md:text-lg text-base w-full">
          {title}
        </div>
        <div className="flex flex-wrap gap-y-2 gap-x-3 text-sm leading-5 w-full md:pr-3">
          <div>Release</div>
          <div className="text-[#707070]">
            {dayjs(timeRelease).format("MMM D, YYYY")}
          </div>
          <div className="text-[#707070]">{timeRead} min read</div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
