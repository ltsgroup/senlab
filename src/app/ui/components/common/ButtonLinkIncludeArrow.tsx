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
        "flex items-center gap-5 cursor-pointer transition-all duration-500 delay-0 ease-in-out",
        {
          "hover:opacity-50": opacityHover,
          "flex-row-reverse": swapIcon,
        },
        rootClassName,
      )}
    >
      <div
        className={cn(
          "flex items-center border border-solid border-black p-1 rounded-full border-opacity-50 text-black",
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
          "text-[#1c2b33] font-bold tracking-[.005em] leading-[150%]",
          customClassText,
        )}
      >
        {text}
      </div>
    </div>
  );
}

export default ButtonLinkIncludeArrow;
