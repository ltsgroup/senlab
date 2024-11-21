import { FC } from "react";
import SecondaryBtn from "../../common/SecondaryBtn";
import PrimaryBtn from "../../common/PrimaryBtn";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  desc: string;
  btnLabel1: string;
  btnLabel2: string;
}

const Banner: FC<Props> = ({ title, desc, btnLabel1, btnLabel2 }) => {
  const t = useTranslations("homepage");
  return (
    <div className="flex items-center justify-center bg-[#185BEA]">
      <div className="mx-auto max-w-[1200px] pt-[124px] pb-[254px] mobile:p-[24px] mobile:pt-[80px] mobile:pb-[160px]">
        <div className="text-center">
          <TypeAnimation
            sequence={[t("banner.titleType1"), 1000, title, 1000]}
            wrapper="h1"
            speed={50}
            className="text-shadow-custom whitespace-pre-line font-bold text-[65px] leading-[65px] text-[#17EB1F] mobile:text-[30px] mobile:leading-[32px]"
            repeat={Infinity}
          />
          <p className="mx-auto mt-[22px] w-[70%] font-mono text-[18px] font-normal leading-[21px] text-[#FFFFFF] mobile:mt-[14px] mobile:text-[14px] mobile:leading-[17px]">
            {desc}
          </p>
        </div>
        <div className="mt-[62px] flex justify-center gap-[40px] mobile:mt-[55px] mobile:gap-[20px]">
          <PrimaryBtn label={btnLabel1} />
          <SecondaryBtn label={btnLabel2} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
