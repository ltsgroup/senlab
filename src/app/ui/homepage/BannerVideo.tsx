import React, { ReactNode, useRef } from "react";

import MaterialSymbolsPauseRounded from "@/icons/MaterialSymbolsPauseRounded";
import MaterialSymbolsPlayArrow from "@/icons/MaterialSymbolsPlayArrow";

interface BannerVideoProps {
  /**
   * The URL of the video to be displayed in the banner.
   */
  videoUrl: string;
  /**
   * The text to be displayed in the banner.
   */
  text: ReactNode;
}

const BannerVideo = ({ videoUrl, text }: BannerVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  function handlePlay() {
    if (!videoRef.current) return;

    if (videoRef.current?.paused) videoRef.current.play();
    else videoRef.current.pause();
    setIsPlaying(videoRef.current?.paused);
  }

  return (
    <div className="bg-white">
      <div className="relative w-full">
        {/* Video */}
        <video
          src={videoUrl}
          className="w-full h-[1349px] md:h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
          controlsList="nodownload"
          onClick={handlePlay}
          ref={videoRef}
        ></video>

        {/* Play button */}
        <button
          className="rounded-full border-2 border-solid border-white p-3 absolute right-8 bottom-8 bg-[rgb(28,_43,_51)] opacity-50"
          onClick={handlePlay}
        >
          {isPlaying ? (
            <MaterialSymbolsPlayArrow className="text-white text-3xl" />
          ) : (
            <MaterialSymbolsPauseRounded className="text-white text-3xl rotate-180" />
          )}
        </button>

        {/* Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1349px] z-[2] w-full">
          {text}
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
