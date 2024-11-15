import { FC } from "react";
import SecondaryBtn from "../common/SecondaryBtn";
import PrimaryBtn from "../common/PrimaryBtn";

interface Props {
  title: string;
  desc: string;
  btnLabel1: string;
  btnLabel2: string;
}

const Banner: FC<Props> = ({ title, desc, btnLabel1, btnLabel2 }) => {
  return (
    <div className="flex items-center justify-center bg-[#185BEA]">
      <div className="mx-auto max-w-[1200px] py-[124px] mobile:p-[24px] mobile:py-[80px]">
        <div className="text-center">
          <h1 className="whitespace-pre-line font-bold text-[65px] leading-[64px] text-[#17EB1F]">
            {title}
          </h1>
          <p className="mx-auto mt-[22px] w-[70%] text-[18px] font-normal leading-[21px] text-[#FFFFFF] mobile:mt-[14px]">
            {desc}
          </p>
          <div className="text-gray-alpha-200">đáádasdsad</div>
        </div>
        <div className="mt-[62px] flex justify-center gap-[40px] mobile:mt-[55px]">
          <PrimaryBtn label={btnLabel1} />
          <SecondaryBtn label={btnLabel2} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
