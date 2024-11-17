import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

interface Props {
  title: string;
  desc: string;
  arrSlide: {
    img: StaticImageData;
    title: string;
    sub: string;
  }[]
}

const Section4: FC<Props> = ({ title, desc, arrSlide }) => {
  return (
    <div className="flex items-center justify-center bg-[#fff]">
      <div className="mx-auto max-w-[1200px] py-[100px] mobile:p-[20px] mobile:py-[45px]">
        <div className="mb-[60px] mobile:mb-[34px]">
          <h1 className="text-center whitespace-pre-line font-bold text-[65px] mobile:text-[26px] leading-[64px] mobile:leading-[30px] mobile:text-center text-[#231F20]">
            {title}
          </h1>
          <p className="text-center mt-[22px] text-[18px] mobile:[16px] font-normal leading-[21px] mobile:leading-[19px] text-[#231F20] mobile:text-center mobile:mt-[14px]">
            {desc}
          </p>
        </div>
        <div className="flex justify-between mobile:flex-col mobile:gap-[30px] items-center">
          {arrSlide?.map((item,index) => (
            <div key={item.title} className={`${index === 0 ? "bg-[#185BEA]" : index === 1 ? "bg-[#EB1773]" : index === 2 ? "bg-[#EBAB17]" : index === 3 ? "bg-[#1ACF21]" : ""} shadow-[4px_4px_0px_0px_#000] mobile:shadow-[2px_2px_0px_0px_#000] w-[240px] p-6 flex flex-col justify-between border-black border-[1px] rounded-[20px] rounded-br-[100px]`}>
              <div>
                <Image
                  alt={item.title}
                  src={item.img}
                  className={`${arrSlide.length - 1 !== index ? "aspect-[1]" : "aspect-[266/231]"} w-[189px] mb-5`}
                />
                <div className="text-center mb-4 text-[18px] font-medium text-white">{item.title}</div>
                <div className="text-center text-[16px] mobile:text-[14px] leading-5 mobile:leading-4 text-white h-[160px] mobile:h-[100px]">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
