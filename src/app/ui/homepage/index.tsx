"use client";
import React from "react";
import Image from "next/image";

import BannerVideo from "./BannerVideo";
import AIStudioIMGPath from "@/homepage/ai_studio.jpg";
import LLAMACard from "@/homepage/LLAMA_Card.jpg";
import latest_ai_news from "@/homepage/latest_ai_news.jpg";
import CardInfo from "./CardInfo";
import ButtonLinkIncludeArrow from "@/app/ui/components/common/ButtonLinkIncludeArrow";

const latest_ai_news_data = [
  {
    header:
      "How Meta Movie Gen could usher in a new AI-enabled era for content creators",
    textButtonWithIcon: "Read post",
    rotate45Deg: false,
    imgUrl: latest_ai_news,
  },
  {
    header:
      "Meta newsroom: Meta’s AI Products Just Got Smarter and More Useful",
    textButtonWithIcon: "Read post",
    rotate45Deg: true,
    imgUrl: latest_ai_news,
  },
  {
    header:
      "Llama 3.2: Revolutionizing edge AI and vision with open, customizable models",
    textButtonWithIcon: "Read post",
    rotate45Deg: false,
    imgUrl: latest_ai_news,
  },
];

const HomePage = () => {
  return (
    <div className="bg-white">
      <BannerVideo
        videoUrl="https://video.fhan5-6.fna.fbcdn.net/o1/v/t2/f2/m69/AQM1eC3JexGWnUogp1iTMtLdhadrI3kgu0YG5xeVeTIleWg_UvXt4tpML4IjkO_oDji-M5VDRg5SG-sUaCFwu9Zd.mp4?efg=eyJ4cHZfYXNzZXRfaWQiOjEyMzM3MjMyOTQzNDUyMjUsInZlbmNvZGVfdGFnIjoieHB2X3Byb2dyZXNzaXZlLkZBQ0VCT09LLi5DMy4xOTA0LmRhc2hfaDI2NC1iYXNpYy1nZW4yXzEwODBwIn0&amp;_nc_ht=video.fhan5-6.fna.fbcdn.net&amp;_nc_cat=104&amp;strext=1&amp;vs=fa5bc49bd1a344e8&amp;_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT2FDaGh1eU4wb0p2T2tHQUFyazZXblVoRFV1YnY0R0FBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKQjZoUnROT1dUU0g4b0JBSWNhaUxoakxtMVRidjRHQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJpKgr-uShLEEFQIoAkMzLBdAJVT987ZFohgaZGFzaF9oMjY0LWJhc2ljLWdlbjJfMTA4MHARAHUCAA&amp;ccb=9-4&amp;oh=00_AYCh3ak7U3oG7l7TemrDFoNDga_cTGm47G-ZJ-YuR_U2uQ&amp;oe=67B88BB6&amp;_nc_sid=1d576d"
        text={
          <div className="flex flex-col gap-5 items-center justify-center text-white">
            <h1 className="lg:text-[64px] md:text-5xl text-4xl font-bold text-center">
              Setting a new standard for
              <br />
              immersive AI content
            </h1>
            <div className="flex items-center gap-5 font-bold flex-wrap justify-center">
              <button className="rounded-3xl bg-[#0E6CE5] px-5 py-3 text-white">
                Learn more
              </button>
              <ButtonLinkIncludeArrow
                text={"Download paper"}
                rotate45Deg={false}
                opacityHover={false}
                customClassText="text-white"
                customClassIconArrow="border-white text-white"
              />
            </div>
          </div>
        }
      />

      <div className="pt-24"></div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-black font-extrabold text-xs">
            PRODUCT EXPERIENCES
          </p>
          <h2 className="text-5xl text-[#1c2b33] text-center">
            Innovation from AI at Meta
          </h2>
        </div>
        <div className="text-[#465a69] text-center">
          We believe AI is for everyone. Explore our latest product
          <br />
          releases and start engaging with these AI experiences
          <br />
          today across our family of apps.
        </div>
      </div>
      <div className="pt-12"></div>

      <div className="max-w-[1349px] mx-auto flex flex-col items-center gap-12 px-6 lg:px-28 md:flex-row">
        <CardInfo
          tag="META AI"
          header="Learn, create and do more with Meta AI"
          textButton="Ask Meta AI anything"
          textButtonWithIcon="Learn more"
          content={`
            Use Meta AI to explore the world around you and bring your visions to
            life. Try our newest features to ask about photos or have a
            conversation using just your voice.
            `}
          media={
            <Image
              src={AIStudioIMGPath}
              alt={""}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          }
        />
        <CardInfo
          tag="META AI"
          header="Learn, create and do more with Meta AI"
          textButton="Ask Meta AI anything"
          textButtonWithIcon="Learn more"
          content={`
            Use Meta AI to explore the world around you and bring your visions to
            life. Try our newest features to ask about photos or have a
            conversation using just your voice.
            `}
          media={
            <Image
              src={AIStudioIMGPath}
              alt={""}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          }
        />
      </div>
      <div className="lg:pt-20 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="lg:pt-20 w-full"></div>
      <div className="max-w-[1349px] mx-auto flex items-center gap-12 px-[72px]">
        <CardInfo
          horizontal
          rotate45Deg
          tag="LLAMA"
          header="Build the future of AI with Llama 3.2"
          textButton="Download models"
          textButtonWithIcon="Learn more"
          content={`
              We’re expanding our latest release of Llama 3.1 to now offer Llama 3.2 models in 1B, 3B, 11B and 90B. 
              You can get started immediately with our Llama ecosystem and partner network.
            `}
          media={
            <Image
              src={LLAMACard}
              alt={""}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          }
          customClassHeader="md:text-4xl tracking-[.01em]"
        />
      </div>
      <div className="lg:pt-24 w-full"></div>

      <BannerVideo
        videoUrl="https://video.fhan5-6.fna.fbcdn.net/o1/v/t2/f2/m69/AQMAhaYsLRpGCj4b1CSLveFKLiEslQ4rQuzwZ2OugM7knCTXHjFV8VVUS-UtWurzWn4iNJiWc-Q-E9ecot8pcLTh.mp4?efg=eyJ4cHZfYXNzZXRfaWQiOjM0ODEwNTg2ODI5MjA2OSwidmVuY29kZV90YWciOiJ4cHZfcHJvZ3Jlc3NpdmUuRkFDRUJPT0suLkMzLjEyODAuZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcCJ9&_nc_ht=video.fhan5-6.fna.fbcdn.net&_nc_cat=107&strext=1&vs=d5c65ebbc2841f53&_nc_vs=HBkcFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSHVOZWhzSTN6WUJCdGNhQU1oOUVlOG5PNGtrYnY0R0FBQUYVAALIAQAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbKv_3ptqaeARUCKAJDMywXQCoQ5WBBiTcYGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHARAHUCAA&ccb=9-4&oh=00_AYAbGoiBcBdx-nYm6Fiyl4jz11GSye-VmEnJH_qXeYdywQ&oe=67B8C723&_nc_sid=1d576d"
        text={
          <div className="">
            <h2 className="text-6xl font-medium text-center text-black">
              Building AI experiences <br /> for everyone
            </h2>
            <p className="p-12 text-[#465a69] text-center">
              Built openly and intelligently with Llama 3.2, our newest
              <br />
              experiences make AI more engaging for anyone to use. From
              <br />
              making your own AIs to having Meta AI identify what’s around
              <br />
              you, our leading AI features help you learn, create and do more
              <br />
              than ever.
            </p>
          </div>
        }
      />
      <div className="lg:pt-24 w-full"></div>

      <div className="max-w-[1600px] text-center mx-auto">
        <h2 className="md:text-5xl text-[#1c2b33]">Latest AI news</h2>
        <div className="lg:pt-6 w-full"></div>
        <div className="flex justify-center">
          <ButtonLinkIncludeArrow text={"Visit blog"} rotate45Deg={false} />
        </div>
      </div>
      <div className="lg:pt-12 w-full"></div>

      <div className="max-w-[1349px] mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {latest_ai_news_data?.map((v, i) => {
          return (
            <CardInfo
              key={i}
              textButtonWithIcon={v?.textButtonWithIcon}
              rotate45Deg={v?.rotate45Deg}
              header={v?.header}
              media={
                <Image
                  src={v?.imgUrl}
                  alt={""}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              }
            />
          );
        })}
      </div>
      <div className="lg:pt-20 w-full"></div>

      <hr className="border-none bg-[#dadde1] text-[#dadde1] h-[1px] w-full my-1" />

      <div className="flex flex-col items-center justify-center gap-5 lg:py-24">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-5xl text-[#1c2b33]">
            Stay informed about AI at Meta
          </h2>
        </div>
        <div className="text-[#465a69] text-center">
          Subscribe to our newsletter to stay up to date with
          <br />
          the latest AI updates, releases and more.
        </div>
        <button className="rounded-3xl bg-[#0E6CE5] px-5 py-3 text-white font-bold tracking-[.005em] leading-[150%]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default HomePage;
