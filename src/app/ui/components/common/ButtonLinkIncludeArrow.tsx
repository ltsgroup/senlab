import MaterialSymbolsArrowRightAltRounded from "@/icons/MaterialSymbolsArrowRightAltRounded";
import { cn } from "@/util/utils";

interface ButtonLinkIncludeArrowProps {
  text: string;
  rotate45Deg?: boolean;
  opacityHover?: boolean;
  customClassIconArrow?: string;
  customClassText?: string;
}

function ButtonLinkIncludeArrow({
  text,
  rotate45Deg,
  opacityHover = true,
  customClassIconArrow = "",
  customClassText = "",
}: ButtonLinkIncludeArrowProps) {
  return (
    <div
      className={cn("flex items-center gap-5 cursor-pointer", {
        "hover:opacity-50": opacityHover,
      })}
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
