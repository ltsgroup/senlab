"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import IonIosArrowDown from "@/icons/arrowDownIOS";
import { cn } from "@/util/utils";
import MaterialSymbolsSearch from "@/icons/MaterialSymbolsSearch";

const routes = [
  {
    id: 1,
    label: "Our approach",
    href: "/",
    children: [
      { id: 2, label: "About us", href: "/" },
      { id: 3, label: "People", href: "/" },
      { id: 4, label: "Carrier", href: "/" },
    ],
  },
  {
    id: 5,
    label: "Research",
    href: "/",
    children: [
      { id: 6, label: "Research 1", href: "/" },
      { id: 7, label: "Research 2", href: "/" },
    ],
  },
  {
    id: 9,
    label: "Demo",
    href: "/",
    children: [{ id: 10, label: "Demo", href: "/" }],
  },
  {
    id: 13,
    label: "Blog",
    href: "blog",
  },
];

function Header() {
  const [menuHover, setMenuHover] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsSearch(false);
  };

  function handleIconSearchClick() {
    setIsHovering(true);
    setMenuHover(null);
    setIsSearch(true);
  }

  function handleHeaderMouseLeave() {
    setIsHovering(false);
    setTimeout(() => {
      setIsSearch(false);
    }, 500);
  }

  function handleMobileMenuClick(id: number) {
    setMenuHover((pre) => (pre === id ? null : id));
  }

  useEffect(() => {
    if (isHovering || isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHovering, isOpen]);

  return (
    <div
      className={cn(
        "sticky top-0 z-10 opacity-100 transition-all duration-500 ease-in-out delay-0",
        {
          "opacity-90": window?.scrollY > 0 && !isHovering,
          "opacity-100": isOpen,
        },
      )}
    >
      {/* Menu */}
      <div
        className={cn(
          "flex px-12 items-center bg-white text-[#344854] min-h-14 tablet:min-h-[60px] relative lg:justify-between",
        )}
      >
        <div className="hidden lg:flex gap-12">
          <h1>Icon</h1>
          {routes?.map((v) => {
            return (
              <Link
                key={v?.id}
                href={v?.href}
                aria-expanded={Boolean(menuHover == v?.id && isHovering)}
                onMouseEnter={() =>
                  handleLinkMenuMouseEnter(v?.id, v?.children ?? [])
                }
                className="cursor-pointer text-header-hover flex items-center gap-2 font-normal text-base"
              >
                <div>{v?.label}</div>
                <div className="IonIosArrowDown">
                  {v?.children?.length ? <IonIosArrowDown /> : null}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <button className="rounded-3xl bg-[#0E6CE5] text-sm px-5 py-2 text-white">
            Try LTS AI
          </button>
          <MaterialSymbolsSearch
            className="text-3xl text-[#717F87]"
            cursor="pointer"
            onClick={handleIconSearchClick}
          />
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

      {/* DROP DOWN MENU */}
      <div
        onMouseLeave={handleHeaderMouseLeave}
        className={cn(
          "bg-white w-full absolute overflow-hidden text-[#344854] border-solid border-gray-400 transition-all duration-500 ease-in-out delay-0",
          {
            "max-h-0": !isHovering,
            "max-h-screen border-t": isHovering,
          },
        )}
      >
        {childMenu && (
          <div className="flex flex-col items-start justify-center px-32 gap-5 py-10">
            {childMenu?.map((v) => {
              return (
                <Link
                  key={v?.id}
                  href={v?.href}
                  className="inline-block px-12 py-4 text-header-hover text-base font-normal !p-0"
                >
                  {v?.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* SEARCH */}
        {isSearch && (
          <div className="flex items-center justify-center gap-5 py-32 w-full">
            <div className="border-b border-solid border-gray-400 flex items-center justify-start gap-3 w-1/2">
              <MaterialSymbolsSearch
                className="text-3xl text-[#717F87]"
                cursor="pointer"
              />
              <input
                autoFocus
                type="text"
                placeholder="Search AI Contents"
                className="focus:border-none focus:outline-none w-1/2 text-lg"
              />
            </div>
          </div>
        )}
      </div>

      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-10 transition-all duration-500 ease-in-out delay-0 backdrop-blur-[2px]",
          {
            "opacity-0 w-0 h-0": !isHovering,
          },
        )}
      />

      <div
        className={cn(
          "w-full min-h-[100dvh] bg-white overflow-hidden transition-all delay-0 duration-500 ease-in-out px-6 py-9 lg:hidden flex flex-col justify-between",
          {
            "max-h-0 p-0 min-h-[0]": !isOpen,
            "max-h-screen border-t": isOpen,
          },
        )}
      >
        <div>
          <div className="border-b border-solid border-gray-400 flex items-center justify-start gap-3 w-full">
            <MaterialSymbolsSearch
              className="text-3xl text-[#344854]"
              cursor="pointer"
            />
            <input
              type="text"
              placeholder="Search AI Contents"
              className="focus:border-none focus:outline-none w-full text-lg"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-9 mt-10 text-[#505e6b]">
            {routes?.map((v) => {
              return (
                <div key={v?.id} className="w-full">
                  <Link
                    href={v?.href}
                    onClick={() => handleMobileMenuClick(v?.id)}
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
                      "flex flex-col items-start justify-start gap-5 py-10 w-full transition-all delay-0 duration-500 ease-in-out overflow-hidden",
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
                          href={v?.href}
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
