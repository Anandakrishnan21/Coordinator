"use client";
import React from "react";
import { useSidebarContext } from "@/context/SidebarContext";
import { HiOutlineLogout, HiViewGrid } from "react-icons/hi";
import { IoHome, IoLogOutOutline } from "react-icons/io5";
import { SiGotomeeting } from "react-icons/si";
import { MdControlCamera } from "react-icons/md";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button } from "@/components/ui/button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const { toggleSidebar } = useSidebarContext();
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  const segment = useSelectedLayoutSegment();

  const sidebarOptions = [
    {
      name: "Home",
      href: "/home",
      icon: IoHome,
      current: !segment ? true : false,
    },
    {
      name: "Dashboard",
      href: "/home/dashboard",
      icon: HiViewGrid,
      current: `/${segment}` === "/dashboard" ? true : false,
    },
    {
      name: "Meeting",
      href: "/home/meeting",
      icon: SiGotomeeting,
      current: `/${segment}` === "/meeting" ? true : false,
    },
    {
      name: "Admin Control",
      href: "/home/control",
      icon: MdControlCamera,
      current: `/${segment}` === "/control" ? true : false,
    },
  ];

  const commonClasses =
    "flex flex-col overflow-y-auto scrollbar-hidden bg-neutral-50 shadow-sm dark:bg-neutral-950 dark:border-r-neutral-800 border-[1px] p-4";
  const commonClasses1 =
    "bg-[#ececec] text-sky-500 dark:bg-neutral-900 dark:border-neutral-700 hover:dark:border-neutral-700 duration-500 dark:text-white font-semibold text-sm";
  const commonClasses2 =
    "border-[1px] border-neutral-50 dark:border-neutral-950 hover:bg-neutral-200 hover:dark:bg-neutral-900 dark:text-neutral-400 duration-200 font-normal";

  return (
    <>
      <aside
        className={`${commonClasses} hidden md:flex sticky top-0 justify-between z-10 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <ul className="flex flex-col gap-3 w-full">
          {sidebarOptions.map((option) => (
            <li key={option.name}>
              <Link
                href={option.href}
                className={classNames(
                  option.current ? `${commonClasses1}` : `${commonClasses2}`,
                  "group flex items-center justify-center gap-x-3 rounded-lg py-1 p-2 text-sm tracking-wide leading-6"
                )}
              >
                <option.icon
                  className={
                    option.current
                      ? "h-5 w-5 shrink-0"
                      : "text-neutral-800 dark:text-neutral-600 h-5 w-5 shrink-0"
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3">
          <Link
            href=""
            className="group flex justify-center gap-x-3 rounded-lg py-1 p-2  text-sm tracking-wide leading-6 bg-neutral-800 text-white"
          >
            <HiOutlineLogout className="w-5 h-5" />
          </Link>
        </ul>
      </aside>
      <aside
        className={`${commonClasses} flex flex-col justify-between z-20 md:z-10 w-56 transition-width duration-300 lg:sticky absolute top-0 p-2 gap-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${
          isSmallOpen
            ? "flex h-screen bg-neutral-50 dark:bg-neutral-950 max-h-screen pt-0 md:pt-[72px]"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 w-full">
          {sidebarOptions.map((option) => (
            <li key={option.name}>
              <Link
                href={option.href}
                className={classNames(
                  option.current ? `${commonClasses1}` : `${commonClasses2}`,
                  "group flex items-center gap-x-3 rounded-lg p-2 text-sm tracking-wide leading-6"
                )}
              >
                <option.icon
                  className={
                    option.current
                      ? "h-5 w-5 shrink-0"
                      : " dark:text-neutral-600 h-5 w-5 shrink-0"
                  }
                />
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3">
          <Button>
            <IoLogOutOutline className="w-6 h-6 mr-2" />
            Logout
          </Button>
        </ul>
      </aside>
    </>
  );
}
