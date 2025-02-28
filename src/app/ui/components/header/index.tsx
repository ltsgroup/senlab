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
        "sticky top-0 z-10 opacity-100 transition-all delay-0 duration-500 ease-in-out",
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
          "relative flex min-h-14 items-center bg-bgColor px-12 text-[#344854] lg:justify-between max-lg:min-h-[60px] max-lg:border-b max-lg:border-solid max-lg:border-gray-400",
        )}
      >
        <Link href={"/"} className="hidden cursor-pointer gap-12 lg:flex">
          <Image
            src={logo}
            alt="logo"
            className="h-[48px] w-full rounded-lg object-cover"
            width={1000}
            height={1000}
          />
        </Link>
        <div className="flex gap-12 max-lg:hidden">
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
                className="text-header-hover group flex cursor-pointer items-center gap-2 text-base font-normal"
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
            "absolute left-0 top-[56px] w-full overflow-hidden border-solid border-gray-400 bg-bgColor text-[#344854] transition-all delay-0 duration-500 ease-in-out max-lg:hidden",
            {
              "max-h-0": !isHovering,
              "max-h-screen border-t": isHovering,
            },
          )}
        >
          {childMenu && (
            <div className="flex flex-col items-start justify-center gap-5 px-32 py-10 pl-[58%]">
              {childMenu?.map((v) => {
                return (
                  <Link
                    key={v?.id}
                    href={createHref(v?.href)}
                    onClick={handleMenuChildClick}
                    className="text-header-hover inline-block !p-0 px-12 py-4 text-base font-normal"
                  >
                    {v?.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="w-full text-center lg:hidden">Icon</div>
        <button
          className="relative flex h-5 flex-col items-center justify-between lg:hidden"
          onClick={() => setIsOpen((pre) => !pre)}
        >
          <div
            className={cn(
              "h-[2px] w-6 rounded bg-black transition-all delay-0 duration-500 ease-in-out",
              {
                "translate-y-[5px] rotate-45": isOpen,
              },
            )}
          />
          <div
            className={cn(
              "h-[2px] w-6 rounded bg-black transition-all delay-0 duration-500 ease-in-out",
              {
                "opacity-0": isOpen,
              },
            )}
          />
          <div
            className={cn(
              "h-[2px] w-6 rounded bg-black transition-all delay-0 duration-500 ease-in-out",
              {
                "-translate-y-[13px] -rotate-45": isOpen,
              },
            )}
          />
        </button>
      </div>

      {/* BACKDROP */}
      <div
        className={cn(
          "fixed left-0 top-0 -z-10 h-full w-full bg-black bg-opacity-50 backdrop-blur-[2px] transition-all delay-0 duration-500 ease-in-out",
          {
            "h-0 w-0 opacity-0": !isHovering,
          },
        )}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "flex min-h-[calc(100dvh_-_56px)] w-full flex-col justify-between overflow-hidden bg-bgColor px-6 py-9 transition-all delay-0 duration-500 ease-in-out lg:hidden",
          {
            "max-h-0 min-h-[0] p-0": !isOpen,
            "max-h-screen border-t": isOpen,
          },
        )}
      >
        <div className="mt-10 flex flex-col items-start justify-start gap-9 overflow-y-scroll text-[#505e6b]">
          {routes?.map((v) => {
            return (
              <div key={v?.id} className="w-full">
                <Link
                  href={createHref(v?.href)}
                  onClick={(e) => handleMobileMenuClick(e, v)}
                  className="flex w-full items-center justify-between text-2xl font-normal tracking-[0.1em]"
                >
                  {v?.label}
                  {v?.children?.length ? (
                    <IonIosArrowDown
                      className={cn(
                        "-rotate-90 transition-all delay-0 duration-500 ease-in-out",
                        {
                          "-rotate-50": menuHover === v?.id,
                        },
                      )}
                    />
                  ) : null}
                </Link>

                <div
                  className={cn(
                    "flex w-full flex-col items-start justify-start gap-5 overflow-hidden pt-10 transition-all delay-0 duration-500 ease-in-out",
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
                        className="text-header-hover inline-block !p-0 px-12 py-4 text-base font-normal"
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

        <div className="border-t pb-12 pt-4">
          <button className="rounded-3xl bg-[#0E6CE5] px-5 py-3 text-white">
            Try LTS AI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
