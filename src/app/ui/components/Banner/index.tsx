import { FC } from "react";
import SecondaryBtn from "../common/SecondaryBtn";
import PrimaryBtn from "../common/PrimaryBtn";

interface Props {
  title: string;
  desc: string;
  btnLabel1: string;
  btnLabel2: string; 
}

const Banner: FC<Props> = ({
  title,
  desc,
  btnLabel1,
  btnLabel2
}) => {
  return (
    <div className="flex justify-center items-center bg-[#185BEA]">
      <div className="max-w-[1200px] mx-auto py-[124px] mobile:py-[80px] mobile:p-[24px]">
        <div className="text-center">
          <h1 className="font-bold text-[65px] text-[#17EB1F] leading-[64px] whitespace-pre-line">{title}</h1>
          <p className="mt-[22px] mobile:mt-[14px] w-[70%] mx-auto font-normal text-[18px] text-[#FFFFFF] leading-[21px]">{desc}</p>
        </div>
        <div className="mt-[62px] mobile:mt-[55px] flex justify-center gap-[40px]">
          <PrimaryBtn label={btnLabel1} />
          <SecondaryBtn label={btnLabel2} />
        </div>
      </div>
    </div>
  );
}

export default Banner;