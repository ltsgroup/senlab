"use client";
import React from "react";

import BannerVideo from "../homepage/BannerVideo";

interface PageProps {
  slug: string;
}

function BlogDetailPage({ slug }: PageProps) {
  console.log("🚀 ~ BlogDetailPage ~ params: ", slug);

  return (
    <div className="bg-bgColor">
      <BannerVideo
        videoUrl={"/blog/20250226_1552_Lotus_River_Message_simple_compose.mp4"}
        text={""}
      />
      <div>{slug}</div>
    </div>
  );
}

export default BlogDetailPage;
