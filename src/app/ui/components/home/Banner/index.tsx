import { FC } from "react";
import SecondaryBtn from "../../common/SecondaryBtn";
import PrimaryBtn from "../../common/PrimaryBtn";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  titleMobile: string;
  desc: string;
  btnLabel1: string;
  btnLabel2: string;
}

const Banner: FC<Props> = ({
  titleMobile,
  title,
  desc,
  btnLabel1,
  btnLabel2,
}) => {
  const t = useTranslations("homepage");
  return (
    <div className="flex items-center justify-center bg-[#185BEA]">
      <div className="mx-auto max-w-[1200px] pb-[254px] pt-[124px] mobile:p-[24px] mobile:pb-[160px] mobile:pt-[80px]">
        <div className="text-center">
          <TypeAnimation
            sequence={[t("banner.titleType1"), 1000, title, 1000]}
            wrapper="h1"
            speed={50}
            className="whitespace-pre-line text-[65px] font-bold leading-[65px] text-[#17EB1F] text-shadow-custom mobile:hidden mobile:text-[30px] mobile:leading-[32px]"
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[t("banner.titleType1Mobile"), 1000, titleMobile, 1000]}
            wrapper="h1"
            speed={50}
            className="hidden whitespace-pre-line text-[65px] font-bold leading-[65px] text-[#17EB1F] text-shadow-custom mobile:block mobile:text-[30px] mobile:leading-[32px]"
            repeat={Infinity}
          />
          <p className="mx-auto mt-[22px] w-[100%] max-w-[800px] font-mono text-[18px] font-normal leading-[21px] text-[#FFFFFF] mobile:mt-[14px] mobile:max-w-[300px] mobile:text-[14px] mobile:leading-[17px]">
            {desc}
          </p>
        </div>
        <div className="mt-[62px] flex justify-center gap-[40px] mobile:mt-[55px] mobile:gap-[20px]">
          <PrimaryBtn
            label={btnLabel1}
            className="h-[44px] w-[148px] mobile:h-[30px] mobile:w-[122px]"
          />
          <SecondaryBtn
            label={btnLabel2}
            className="h-[44px] w-[248px] mobile:h-[30px] mobile:w-[186px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
