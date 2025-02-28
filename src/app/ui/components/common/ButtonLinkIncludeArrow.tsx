import MaterialSymbolsArrowRightAltRounded from "@/icons/MaterialSymbolsArrowRightAltRounded";
import { cn } from "@/util/utils";

interface ButtonLinkIncludeArrowProps {
  /**
   * The text to be displayed in the button.
   */
  text: string;

  /**
   * If true, rotates the arrow icon 45 degrees.
   * Default: `false`
   */
  rotate45Deg?: boolean;

  /**
   * If true, reduces opacity on hover.
   * Default: `true`
   */
  opacityHover?: boolean;

  /**
   * Custom CSS classes for styling the arrow icon.
   */
  customClassIconArrow?: string;

  /**
   * Custom CSS classes for styling the button text.
   */
  customClassText?: string;

  /**
   * Custom CSS classes for styling the root wrapper div.
   */
  rootClassName?: string;

  /**
   * If true, swaps the icon and text positions.
   * Default: `false`
   */
  swapIcon?: boolean;
}

function ButtonLinkIncludeArrow({
  text,
  rotate45Deg,
  opacityHover = true,
  customClassIconArrow = "",
  customClassText = "",
  rootClassName = "",
  swapIcon = false,
}: ButtonLinkIncludeArrowProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-5 transition-all delay-0 duration-500 ease-in-out",
        {
          "hover:opacity-50": opacityHover,
          "flex-row-reverse": swapIcon,
        },
        rootClassName,
      )}
    >
      <div
        className={cn(
          "flex items-center rounded-full border border-solid border-black border-opacity-50 p-1 text-black",
          customClassIconArrow,
        )}
      >
        <MaterialSymbolsArrowRightAltRounded
          className={cn("", {
            "-rotate-45": rotate45Deg,
          })}
        />
      </div>
      <div
        className={cn(
          "font-bold leading-[150%] tracking-[.005em] text-[#1c2b33]",
          customClassText,
        )}
      >
        {text}
      </div>
    </div>
  );
}

export default ButtonLinkIncludeArrow;
