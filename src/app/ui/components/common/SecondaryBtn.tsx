import { cn } from "@/util/utils";

const SecondaryBtn = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-[#000] p-2 mobile:h-[30px] text-[21px] mobile:text-[16px] leading-[31px] mobile:leading-[16px] text-[#fff] shadow-[3px_3px_0px_0px_#17EB1F] hover:opacity-80 transition-all duration-150",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default SecondaryBtn;
