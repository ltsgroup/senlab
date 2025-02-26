"use client";
import Link from "next/link";
import React, { MouseEvent, useEffect, useState } from "react";

import IonIosArrowDown from "@/icons/arrowDownIOS";
import { cn } from "@/util/utils";
import { routes } from "@/const/common";
import { useHref } from "@/hook/href";
import logo from "@/logo.png";
import Image from "next/image";

function Header() {
  const createHref = useHref();
  const [menuHover, setMenuHover] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  function findChildMenuById(id: number) {
    const route = routes.find((v) => v.id === id);
    return route?.children;
  }
  const childMenu = findChildMenuById(menuHover ?? 0);

  const handleLinkMenuMouseEnter = (id: number, children: Array<any>) => {
    if (children?.length) {
      setMenuHover(id);
    }
    setIsHovering(Boolean(children?.length));
  };

  function handleHeaderMouseLeave() {
    setIsHovering(false);
  }

  function handleLinkMenuClick(
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    value: (typeof routes)[0],
  ) {
    if (value?.children?.length) {
      e.preventDefault();
      setIsHovering((pre) => !pre);
      setMenuHover((pre) => (pre === value?.id ? null : value?.id));
    }
  }

  function handleMenuChildClick() {
    setIsHovering(false);
    setMenuHover(null);
  }

  function handleMobileMenuChildClick() {
    setIsHovering(false);
    setMenuHover(null);
    setIsOpen(false);
  }

  function handleMobileMenuClick(
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    v: (typeof routes)[0],
  ) {
    if (!v?.children?.length) {
      handleMobileMenuChildClick();
    } else {
      e.preventDefault();
      setMenuHover((pre) => (pre === v?.id ? null : v?.id));
    }
  }

  useEffect(() => {
    if (isHovering) document.body.style.overflowY = "hidden";
    else document.body.style.overflow = "auto";
  }, [isHovering]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-10 opacity-100 transition-all duration-500 ease-in-out delay-0",
        {
          "opacity-90": isScroll && !isHovering,
          "opacity-100": isOpen,
        },
      )}
    >
      {/* Menu */}
      <div
        onMouseLeave={handleHeaderMouseLeave}
        className={cn(
          "flex px-12 items-center bg-bgColor text-[#344854] min-h-14 tablet:min-h-[60px] relative lg:justify-between max-lg:border-b max-lg:border-solid max-lg:border-gray-400",
        )}
      >
        <Link href={"/"} className="hidden lg:flex gap-12 cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            className="w-full h-[48px] object-cover rounded-lg"
            width={1000}
            height={1000}
          />
        </Link>
        <div className="max-lg:hidden flex gap-12">
          {routes?.map((v) => {
            const isExpanded = menuHover == v?.id && isHovering;

            return (
              <Link
                key={v?.id}
                href={createHref(v?.href)}
                onClick={(e) => handleLinkMenuClick(e, v)}
                aria-expanded={isExpanded}
                onMouseEnter={() =>
                  handleLinkMenuMouseEnter(v?.id, v?.children ?? [])
                }
                className="cursor-pointer text-header-hover flex items-center gap-2 font-normal text-base group"
              >
                <div>{v?.label}</div>
                <div className="IonIosArrowDown">
                  {v?.children?.length ? <IonIosArrowDown /> : null}
                </div>
              </Link>
            );
          })}
        </div>

        {/* DROP DOWN MENU */}
        <div
          className={cn(
            "absolute left-0 top-[56px] bg-bgColor w-full overflow-hidden text-[#344854] border-solid border-gray-400 transition-all duration-500 ease-in-out delay-0",
            {
              "max-h-0": !isHovering,
              "max-h-screen border-t": isHovering,
            },
          )}
        >
          {childMenu && (
            <div className="flex flex-col items-start justify-center px-32 gap-5 py-10 pl-[58%]">
              {childMenu?.map((v) => {
                return (
                  <Link
                    key={v?.id}
                    href={createHref(v?.href)}
                    onClick={handleMenuChildClick}
                    className="inline-block px-12 py-4 text-header-hover text-base font-normal !p-0"
                  >
                    {v?.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="text-center w-full lg:hidden">Icon</div>
        <button
          className="relative h-5 flex flex-col justify-between items-center lg:hidden"
          onClick={() => setIsOpen((pre) => !pre)}
        >
          <div
            className={cn(
              "w-6 h-[2px] bg-black rounded transition-all duration-500 delay-0 ease-in-out",
              {
                "rotate-45 translate-y-[5px]": isOpen,
              },
            )}
          />
          <div
            className={cn(
              "w-6 h-[2px] bg-black rounded transition-all duration-500 delay-0 ease-in-out",
              {
                "opacity-0": isOpen,
              },
            )}
          />
          <div
            className={cn(
              "w-6 h-[2px] bg-black rounded transition-all duration-500 delay-0 ease-in-out",
              {
                "-rotate-45 -translate-y-[13px]": isOpen,
              },
            )}
          />
        </button>
      </div>

      {/* BACKDROP */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-10 transition-all duration-500 ease-in-out delay-0 backdrop-blur-[2px]",
          {
            "opacity-0 w-0 h-0": !isHovering,
          },
        )}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "w-full min-h-[calc(100dvh_-_56px)] bg-bgColor overflow-hidden transition-all delay-0 duration-500 ease-in-out px-6 py-9 lg:hidden flex flex-col justify-between",
          {
            "max-h-0 p-0 min-h-[0]": !isOpen,
            "max-h-screen border-t": isOpen,
          },
        )}
      >
        <div className="flex flex-col items-start justify-start gap-9 mt-10 text-[#505e6b] overflow-y-scroll">
          {routes?.map((v) => {
            return (
              <div key={v?.id} className="w-full">
                <Link
                  href={createHref(v?.href)}
                  onClick={(e) => handleMobileMenuClick(e, v)}
                  className="flex justify-between items-center text-2xl font-normal tracking-[0.1em] w-full"
                >
                  {v?.label}
                  {v?.children?.length ? (
                    <IonIosArrowDown
                      className={cn(
                        "-rotate-90 transition-all duration-500 delay-0 ease-in-out",
                        {
                          "-rotate-50": menuHover === v?.id,
                        },
                      )}
                    />
                  ) : null}
                </Link>

                <div
                  className={cn(
                    "flex flex-col items-start justify-start gap-5 pt-10 w-full transition-all delay-0 duration-500 ease-in-out overflow-hidden",
                    {
                      "max-h-0 p-0": v?.id !== menuHover,
                      "max-h-screen border-t": v?.id === menuHover,
                    },
                  )}
                >
                  {v?.children?.map((v) => {
                    return (
                      <Link
                        key={v?.id}
                        href={createHref(v?.href)}
                        onClick={handleMobileMenuChildClick}
                        className="inline-block px-12 py-4 text-header-hover text-base font-normal !p-0"
                      >
                        {v?.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t pt-4 pb-12">
          <button className="rounded-3xl bg-[#0E6CE5] px-5 py-3 text-white">
            Try LTS AI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
