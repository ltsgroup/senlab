import Image from "next/image";
import { FC } from "react";
import s1 from "@/../public/homepage/section2/s1.png";
import s2 from "@/../public/homepage/section2/s2.png";
import s3 from "@/../public/homepage/section2/s3.png";

interface Props {
  title: string;
  desc: string;
}

const Section2: FC<Props> = ({ title, desc }) => {
  return (
    <div className="flex items-center justify-center bg-[#17EB1F]">
      <div className="mx-auto max-w-[1200px] py-[100px] mobile:p-[20px] mobile:py-[45px] flex justify-between mobile:block">
        <div className="w-[45%] mobile:w-full mobile:mb-[34px]">
          <h1 className="whitespace-pre-line font-bold text-[65px] mobile:text-[26px] leading-[64px] mobile:leading-[30px] mobile:text-center text-[#231F20]">
            {title}
          </h1>
          <p className="mt-[22px] text-[18px] mobile:[16px] font-normal leading-[21px] mobile:leading-[19px] text-[#231F20] mobile:text-center mobile:mt-[14px]">
            {desc}
          </p>
        </div>
        <div className="w-[50%] mobile:w-full flex gap-[20px] mobile:gap-[14px] justify-center">
          <div className="flex flex-col gap-5 justify-center">
            <Image alt={"s1"} src={s1} className="aspect-[200/195] w-[200px] mobile:w-[113px] ml-auto shadow-[8px_8px_0px_0px_#185BEA] mobile:shadow-[5px_5px_0px_0px_#185BEA]" />
            <Image alt={"s2"} src={s2} className="aspect-[256/235] w-[256px] mobile:w-[145px] shadow-[8px_8px_0px_0px_#EBAB17] mobile:shadow-[5px_5px_0px_0px_#EBAB17]" />
          </div>
          <Image alt={"s3"} src={s3} className="aspect-[299/416] w-[299px] mobile:w-[169px] shadow-[8px_8px_0px_0px_#EB1773] mobile:shadow-[5px_5px_0px_0px_#EB1773]" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
