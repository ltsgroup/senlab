import Image from "next/image";
import { FC } from "react";
import s1 from "@/../public/homepage/section2/s1.png";
import s2 from "@/../public/homepage/section2/s2.png";
import s3 from "@/../public/homepage/section2/s3.png";

interface Props {
  title: string;
  desc: string;
}

const Section2: FC<Props> = ({
  title,
  desc,
}) => {
  return (
    <div className="flex justify-center items-center bg-[#17EB1F]">
      <div className="max-w-[1200px] mx-auto py-[100px] mobile:py-[45px] mobile:p-[24px]">
        <div>
          <h1 className="font-bold text-[65px] text-[#231F20] leading-[64px] whitespace-pre-line">{title}</h1>
          <p className="mt-[22px] mobile:mt-[14px] font-normal text-[18px] text-[#231F20] leading-[21px]">{desc}</p>
        </div>
        <div>
          <div className="mt-[62px] mobile:mt-[55px] flex justify-center gap-[40px]">
            <Image
              alt={"s1"}
              src={s1}
              className="w-[200px] aspect-[200/195]"
            />
            <Image
              alt={"s2"}
              src={s2}
              className="w-[256px] aspect-[256/235]"
            />
          </div>
          <Image
            alt={"s3"}
            src={s3}
            className="w-[299px] aspect-[299/416]"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;