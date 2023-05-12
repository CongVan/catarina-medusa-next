"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ButtonIcon } from "./ButtonIcon";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const SidebarMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div>
      <ButtonIcon
        variant="subtle"
        className="block lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Bars3Icon className="w-6 h-6" />
      </ButtonIcon>
      <div
        className={twMerge(
          "bg-white fixed top-0 left-0 w-[286px] z-50 block",
          "transition-all duration-300 bottom-0 ease-in-out pt-10",
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        )}
      >
        <Navigation />
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-opacity-10 bg-black z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};
