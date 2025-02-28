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
    <div className="flex flex-col bg-white">
      <div className="w-full bg-[#ccd1d4] pb-[60px] pt-5 md:py-[60px]">
        <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-start justify-between gap-[60px] px-6 md:flex-row md:gap-0 md:px-[50px]">
          <div className="flex w-full flex-wrap justify-start md:max-w-[60%]">
            {routes?.map((v, i) => {
              const isOpen = Boolean(footerMenuExpanded === v?.id);
              return (
                <div
                  key={i}
                  onClick={() => handleMenuFooterClick(v)}
                  className="flex w-full flex-col pb-[30px] tablet-large:w-[45%] tablet-large:p-[0_60px_50px_0]"
                >
                  <div className="flex w-full items-center justify-between">
                    <Link
                      className="mb-[10px] text-[#344854] tablet-large:mb-[30px]"
                      href={v?.href}
                    >
                      <span className="text-[22px] leading-7">{v?.label}</span>
                    </Link>

                    {v?.children?.length && (
                      <div className="flex items-center justify-end">
                        <IonIosArrowDown
                          className={cn(
                            "-rotate-90 transition-all delay-0 duration-500 ease-in-out md:hidden",
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
                      "overflow-hidden transition-all delay-0 duration-500 ease-in-out md:flex md:max-h-max md:flex-col",
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
                          className="flex items-start justify-between"
                        >
                          <Link
                            className="mb-4 text-[#344854] hover:underline tablet-large:mb-0"
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
          <div className="flex h-full w-full items-center justify-start gap-[25px] md:max-w-[40%]">
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
            <div className="hidden items-start gap-3 md:flex">
              <AkarIconsFacebookFill className="text-3xl" />
              <MdiTwitterCircle className="text-3xl" />
              <EntypoSocialLinkedinWithCircle className="text-3xl" />
              <EntypoSocialYoutubeWithCircle className="text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Policy */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-[50px] max-md:px-6">
        <div className="flex gap-5 py-5 text-[#344854] max-md:flex-col max-md:gap-0 max-md:text-sm">
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

        <div className="max-md: flex-col md:py-5 max-md:flex max-md:items-center max-md:justify-between max-md:text-sm">
          <div className="max-md:py-5">
            LTS &copy; {new Date().getFullYear()}
          </div>
          <div className="flex items-start gap-3 md:hidden">
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
