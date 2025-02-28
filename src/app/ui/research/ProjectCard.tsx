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
      className="group flex h-full min-w-[1/3] flex-col flex-wrap items-start"
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={imgUrl}
          alt=""
          width={1000}
          height={1000}
          className="h-auto w-full object-cover transition-transform delay-0 duration-500 ease-in-out group-hover:scale-125"
        />
      </div>
      <div className="flex w-full flex-col flex-wrap items-start pt-4">
        <div className="mb-4 w-full text-base font-medium md:pr-8 md:text-lg">
          {title}
        </div>
        <div className="flex w-full flex-wrap gap-x-3 gap-y-2 text-sm leading-5 md:pr-3">
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
