import Image from "next/image";
import { FC } from "react";
import PrimaryBtn from "../../common/PrimaryBtn";

interface Props {
  title: string;
}

const CTA: FC<Props> = ({ title }) => {
  return (
    <div className="bg-[#185BEA] py-[80px] mobile:py-[45px] px-[20px]">
      <div className="flex justify-around mx-auto max-w-[1200px] mobile:flex-col">
        <div className="text-[#17EB1F] text-[40px] mobile:text-[26px] mobile:text-center leading-[45px] mobile:leading-[30px] font-bold whitespace-pre-line mobile:mb-[36px]">{title}</div>
        <div className="flex gap-[26px] mobile:gap-[18px] items-center justify-center">
          <input placeholder="Enter your email address" type="email" className="px-[14px] py-[8px] rounded-lg text-[#000000] text-[21px] mobile:text-[16px] mobile:leading-4 font-normal shadow-[3px_3px_0px_0px_#000] h-fit"/>
          <PrimaryBtn label="Notify Me" className="h-fit" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
