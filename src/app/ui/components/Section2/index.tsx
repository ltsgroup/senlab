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
      <div className="mx-auto max-w-[1200px] py-[100px] mobile:p-[24px] mobile:py-[45px]">
        <div>
          <h1 className="whitespace-pre-line font-bold text-[65px] leading-[64px] text-[#231F20]">
            {title}
          </h1>
          <p className="mt-[22px] text-[18px] font-normal leading-[21px] text-[#231F20] mobile:mt-[14px]">
            {desc}
          </p>
        </div>
        <div>
          <div className="mt-[62px] flex justify-center gap-[40px] mobile:mt-[55px]">
            <Image alt={"s1"} src={s1} className="aspect-[200/195] w-[200px]" />
            <Image alt={"s2"} src={s2} className="aspect-[256/235] w-[256px]" />
          </div>
          <Image alt={"s3"} src={s3} className="aspect-[299/416] w-[299px]" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
