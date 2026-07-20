"use client";

import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/ui/Button";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex w-full items-center justify-between py-6">
      <span className="font-semibold text-[16px] text-black tracking-[-0.64px]">
        H.Studio
      </span>
      <ul className="hidden items-center gap-14 font-semibold text-[16px] text-black tracking-[-0.64px] md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <Button href="#contact">Let&rsquo;s talk</Button>
      </div>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-50 flex size-6 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={clsx(
            "h-[1.5px] w-full bg-black transition-transform",
            isOpen && "translate-y-0.75 rotate-45",
          )}
        />
        <span
          className={clsx(
            "h-[1.5px] w-full bg-black transition-transform",
            isOpen && "-translate-y-0.75 -rotate-45",
          )}
        />
      </button>

      <div
        aria-hidden={!isOpen}
        className={clsx(
          "absolute inset-x-0 top-full z-40 flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg transition-opacity duration-300 ease-in-out md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="flex flex-col gap-4 font-semibold text-[16px] text-black tracking-[-0.64px]">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#contact" onClick={() => setIsOpen(false)}>
          Let&rsquo;s talk
        </Button>
      </div>
    </nav>
  );
}
