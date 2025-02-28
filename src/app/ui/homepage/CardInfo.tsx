import { ReactNode } from "react";

import { cn } from "@/util/utils";
import ButtonLinkIncludeArrow from "../components/common/ButtonLinkIncludeArrow";

interface CardInfoProps {
  /** Optional tag to categorize the card */
  tag?: string;

  /** Title of the card (required) */
  title?: string;

  /** Optional content or description of the card */
  content?: string;

  /** Optional text for a button inside the card */
  textButton?: string;

  /** Text for a button with an icon (required) */
  textButtonWithIcon: string;

  /** Media content (image, video, or any ReactNode) displayed in the card */
  media: ReactNode;

  /** If true, rotates the icon of button icon by 45 degrees */
  rotate45Deg?: boolean;

  /** If true, displays the card in a horizontal layout */
  horizontal?: boolean;

  /** Optional custom class for styling the title */
  customClassTitle?: string;

  /** If true, positions the title at the top of the card */
  titleOnTop?: boolean;

  /** Optional custom class for styling the icon arrow in the button */
  customClassIconArrow?: string;

  /** Optional custom class for styling the text in the button */
  customClassTextButtonArrow?: string;

  /** Optional custom class for styling the root element of the button arrow component. */
  rootClassNameButtonArrow?: string;

  /** If true, swaps the position of the icon and text in the button. */
  swapIcon?: boolean;

  /** If true, applies a hover effect that changes the opacity of the element. */
  opacityHover?: boolean;

  /** Optional sub-tag to further categorize the card */
  subTag?: string;
}

function CardInfo({
  media,
  tag,
  content,
  title,
  textButton,
  textButtonWithIcon,
  rotate45Deg,
  horizontal,
  customClassTitle = "",
  titleOnTop = false,
  customClassIconArrow = "",
  customClassTextButtonArrow = "",
  rootClassNameButtonArrow = "",
  swapIcon = false,
  opacityHover = true,
  subTag,
}: CardInfoProps) {
  return (
    <div className={cn("flex h-full w-full flex-col items-start")}>
      {titleOnTop && title && (
        <h3
          className={cn(
            "mb-2 pr-9 text-xl tracking-[0] md:text-2xl md:tracking-[.005em]",
            {
              "pr-12": horizontal,
            },
            customClassTitle,
          )}
        >
          {title}
        </h3>
      )}

      <div
        className={cn("flex h-full w-full flex-col items-start", {
          "items-center md:flex-row md:gap-24": horizontal,
        })}
      >
        <div
          className={cn("w-full overflow-hidden rounded-3xl", {
            "w-full md:w-1/2": horizontal,
          })}
        >
          {media}
        </div>
        <div
          className={cn("w-full pt-6", {
            "hidden max-md:block": horizontal,
          })}
        ></div>
        <div
          className={cn("flex flex-col items-start", {
            "w-full md:w-1/2": horizontal,
          })}
        >
          {tag && <p className="mb-2 text-xs font-extrabold">{tag}</p>}

          {title && !titleOnTop && (
            <h3
              className={cn(
                "mb-2 pr-9 text-xl tracking-[0] md:text-2xl md:tracking-[.005em]",
                {
                  "pr-12": horizontal,
                },
                customClassTitle,
              )}
            >
              {title}
            </h3>
          )}

          {content && (
            <p className="mb-6 max-w-[91.666%] text-[#465a69]">{content}</p>
          )}

          {subTag && (
            <p className="mb-4 text-xs font-extrabold text-[#6B9690]">
              {subTag}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-5 font-bold">
            {textButton && textButton?.length && (
              <button className="rounded-3xl bg-[#0E6CE5] px-4 py-[10] text-white transition-all delay-0 duration-500 hover:bg-[#0050b3]">
                {textButton}
              </button>
            )}

            <ButtonLinkIncludeArrow
              text={textButtonWithIcon}
              rotate45Deg={rotate45Deg}
              customClassIconArrow={customClassIconArrow}
              customClassText={customClassTextButtonArrow}
              rootClassName={rootClassNameButtonArrow}
              swapIcon={swapIcon}
              opacityHover={opacityHover}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
