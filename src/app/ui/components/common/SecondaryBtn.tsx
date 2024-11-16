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
        "rounded-lg bg-[#000] p-2 text-[21px] leading-[31px] text-[#fff] shadow-[4px_4px_0px_0px_#17EB1F]",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default SecondaryBtn;
