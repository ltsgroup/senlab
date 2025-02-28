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
          className="h-[1349px] w-full object-cover md:h-auto"
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
          className="absolute bottom-8 right-8 rounded-full border-2 border-solid border-white bg-[rgb(28,_43,_51)] p-3 opacity-50"
          onClick={handlePlay}
        >
          {isPlaying ? (
            <MaterialSymbolsPlayArrow className="text-3xl text-white" />
          ) : (
            <MaterialSymbolsPauseRounded className="rotate-180 text-3xl text-white" />
          )}
        </button>

        {/* Text */}
        <div className="absolute left-1/2 top-1/2 z-[2] w-full max-w-[1349px] -translate-x-1/2 -translate-y-1/2">
          {text}
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
