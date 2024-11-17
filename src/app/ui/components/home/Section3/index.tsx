import Image from "next/image";
import { FC } from "react";
import s1 from "@/../public/homepage/section3/s1.png";
import s2 from "@/../public/homepage/section3/s2.png";
import s3 from "@/../public/homepage/section3/s3.png";
import s4 from "@/../public/homepage/section3/s4.png";
import linkedin from "@/../public/linkedin.png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {FreeMode, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
}

const arrSlide = [
  {
    img: s1,
    name: "Vu Quang Dung",
    pos: "AI and Semiconductor Specialist",
    linkin: "/"
  },
  {
    img: s2,
    name: "Nguyen Duy Anh",
    pos: "Head of AI Services",
    linkin: "/"
  },
  {
    img: s3,
    name: "Trinh Thi Minh Tam",
    pos: "AI Engineer",
    linkin: "/"
  },
  {
    img: s4,
    name: "Nguyen Minh Duc",
    pos: "AI Engineer",
    linkin: "/"
  }
];

const Section3: FC<Props> = ({ title, desc }) => {
  return (
    <div className="flex items-center justify-center bg-[#FFE8B2]">
      <div className="mx-auto max-w-[1200px] py-[100px] mobile:p-[20px] mobile:py-[45px]">
        <div className="mb-[60px] mobile:mb-[34px]">
          <h1 className="text-center whitespace-pre-line font-bold text-[65px] mobile:text-[26px] leading-[64px] mobile:leading-[30px] mobile:text-center text-[#231F20]">
            {title}
          </h1>
          <p className="text-center mt-[22px] text-[18px] mobile:[16px] font-normal leading-[21px] mobile:leading-[19px] text-[#231F20] mobile:text-center mobile:mt-[14px]">
            {desc}
          </p>
        </div>
        {/* <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 38
            }
          }}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="mobile:max-w-[90%] tablet:max-w-[75%]"
        > */}
        <div className="flex justify-between mobile:flex-col gap-[60px] mobile:gap-[30px] items-center">
          {arrSlide?.map((item) => (
            // <SwiperSlide key={item.name} className="mb-[8px]">
              <div key={item.name} className="shadow-[8px_8px_0px_0px_#EB1773] mobile:shadow-[5px_5px_0px_0px_#EB1773] w-[220px] bg-white p-4 flex flex-col justify-between h-full">
                <div>
                  <Image alt={item.name} src={item.img} className="aspect-[189/208] w-[189px] mb-5" />
                  <div className="text-center mb-4 text-[18px] font-medium border-[#000] border-[1px] rounded bg-[#EB1773] text-white">{item.name}</div>
                  <div className="text-center text-[16px] mobile:text-[14px] leading-5 mobile:leading-4 text-[#231F20] h-[40px] mobile:h-auto">{item.pos}</div>
                </div>
                <div className="mt-[24px] flex justify-center relative">
                  <div className="h-[0.5px] absolute top-[50%] -translate-y-1/2 bg-[#3f3f3f] w-[70%] z-0"></div>
                  <Link href={item.linkin} className="p-[6px] w-[32px] bg-white relative z-[1]">
                    <Image src={linkedin} alt={"linkedin-logo"} />
                  </Link>
                </div>
              </div>
            // </SwiperSlide>
          ))}
        </div>
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default Section3;
