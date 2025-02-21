import { ReactNode } from "react";

import { cn } from "@/util/utils";
import ButtonLinkIncludeArrow from "../components/common/ButtonLinkIncludeArrow";

interface CardInfoProps {
  tag?: string;
  header: string;
  content?: string;
  textButton?: string;
  textButtonWithIcon: string;
  media: ReactNode;
  rotate45Deg?: boolean;
  horizontal?: boolean;
  customClassHeader?: string;
}

function CardInfo({
  media,
  tag,
  content,
  header,
  textButton,
  textButtonWithIcon,
  rotate45Deg,
  horizontal,
  customClassHeader = "",
}: CardInfoProps) {
  return (
    <div
      className={cn("flex flex-col items-start w-full", {
        "flex-row gap-24 items-center": horizontal,
      })}
    >
      <div
        className={cn("rounded-3xl overflow-hidden w-full", {
          "w-1/2": horizontal,
        })}
      >
        {media}
      </div>
      <div className={cn("flex flex-col items-start", { "w-1/2": horizontal })}>
        <div className="pt-6 w-full"></div>
        {tag && (
          <p className="text-xs font-extrabold text-[#1c2b33] mb-2">{tag}</p>
        )}

        {header && (
          <h3
            className={cn(
              "md:text-2xl text-[#1c2b33] mb-2 pr-9",
              {
                "pr-12": horizontal,
              },
              customClassHeader,
            )}
          >
            {header}
          </h3>
        )}

        {content && (
          <p className="text-[#465a69] max-w-[91.666%] mb-6">{content}</p>
        )}

        <div className="flex flex-wrap items-center gap-5 font-bold">
          {textButton && (
            <button className="rounded-3xl bg-[#0E6CE5] px-4 py-[10] text-white hover:bg-[#0050b3] transition-all duration-500 delay-0">
              {textButton}
            </button>
          )}

          <ButtonLinkIncludeArrow
            text={textButtonWithIcon}
            rotate45Deg={rotate45Deg}
          />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
