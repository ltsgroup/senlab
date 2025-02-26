"use client";

import { routes } from "@/const/common";
import AkarIconsFacebookFill from "@/icons/AkarIconsFacebookFill";
import IonIosArrowDown from "@/icons/arrowDownIOS";
import EntypoSocialLinkedinWithCircle from "@/icons/EntypoSocialLinkedinWithCircle";
import EntypoSocialYoutubeWithCircle from "@/icons/EntypoSocialYoutubeWithCircle";
// import MaterialSymbolsSearch from "@/icons/MaterialSymbolsSearch";
import MdiTwitterCircle from "@/icons/MdiTwitterCircle";
import { cn } from "@/util/utils";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [footerMenuExpanded, setFooterMenuExpanded] = useState<number | null>(
    null,
  );

  function handleMenuFooterClick(menu: (typeof routes)[0]) {
    if (!menu?.children?.length) setFooterMenuExpanded(null);
    setFooterMenuExpanded((pre) => {
      if (pre === menu?.id) {
        return null;
      }
      return menu?.id;
    });
  }

  return (
    <div className="bg-white flex flex-col">
      <div className="w-full bg-[#ccd1d4] pt-5 pb-[60px] md:py-[60px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[50px] flex md:flex-row flex-col-reverse justify-between items-start gap-[60px] md:gap-0">
          <div className="flex md:max-w-[60%] w-full flex-wrap justify-start">
            {routes?.map((v, i) => {
              const isOpen = Boolean(footerMenuExpanded === v?.id);
              return (
                <div
                  key={i}
                  onClick={() => handleMenuFooterClick(v)}
                  className="w-full pb-[30px] tablet-large:w-[45%] tablet-large:p-[0_60px_50px_0] flex flex-col"
                >
                  <div className="flex justify-between items-center w-full">
                    <Link
                      className="text-[#344854] mb-[10px] tablet-large:mb-[30px]"
                      href={v?.href}
                    >
                      <span className="text-[22px] leading-7">{v?.label}</span>
                    </Link>

                    {v?.children?.length && (
                      <div className="flex justify-end items-center">
                        <IonIosArrowDown
                          className={cn(
                            "-rotate-90 transition-all duration-500 delay-0 ease-in-out md:hidden",
                            {
                              "-rotate-50": isOpen,
                            },
                          )}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className={cn(
                      "md:max-h-max md:flex md:flex-col overflow-hidden transition-all delay-0 duration-500 ease-in-out",
                      {
                        "max-h-0": !isOpen,
                        "max-h-screen": isOpen,
                      },
                    )}
                  >
                    {v?.children?.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-between items-start"
                        >
                          <Link
                            className="text-[#344854] mb-4 tablet-large:mb-0 hover:underline"
                            href={v?.href}
                          >
                            <span className="text-[16px] leading-[22px]">
                              {v?.label}
                            </span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex md:max-w-[40%] w-full justify-start items-center h-full gap-[25px]">
            {/* <div className="border-b border-solid border-[#344854] flex flex-row-reverse md:flex-row items-center justify-start gap-3 w-full">
              <MaterialSymbolsSearch
                className="text-3xl text-[#344854]"
                cursor="pointer"
              />
              <input
                type="text"
                placeholder="Search AI Contents"
                className="focus:border-none focus:outline-none text-base md:text-[22px] tracking-[.004em] leading-[1.5] bg-transparent w-full text-[#344854] placeholder:text-[#344854]"
              />
            </div> */}
            <div className="hidden md:flex gap-3 items-start">
              <AkarIconsFacebookFill className="text-3xl" />
              <MdiTwitterCircle className="text-3xl" />
              <EntypoSocialLinkedinWithCircle className="text-3xl" />
              <EntypoSocialYoutubeWithCircle className="text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Policy */}
      <div className="w-full max-w-[1440px] mx-auto px-[50px] max-md:px-6 flex justify-between items-center">
        <div className="flex max-md:flex-col gap-5 max-md:gap-0 max-md:text-sm py-5 text-[#344854]">
          <Link className="" href="#" target="_blank">
            <span className="">Privacy Policy</span>
          </Link>

          <Link className="" href="#" target="_blank">
            <span className="">Terms</span>
          </Link>

          <Link className="" href="#" target="_blank">
            <span className="">Cookies</span>
          </Link>
        </div>

        <div className="md:py-5 max-md:text-sm max-md:flex max-md:justify-between max-md:items-center max-md: flex-col">
          <div className="max-md:py-5">
            LTS &copy; {new Date().getFullYear()}
          </div>
          <div className="md:hidden flex gap-3 items-start">
            <AkarIconsFacebookFill className="text-2xl" />
            <MdiTwitterCircle className="text-2xl" />
            <EntypoSocialLinkedinWithCircle className="text-2xl" />
            <EntypoSocialYoutubeWithCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
