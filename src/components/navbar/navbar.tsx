"use client";

import Image from "next/image";
import Link from "next/link";

import { navData } from "./navData";

export default function Navbar() {

  const Icon = navData.button.icon;

  return (

    <header className="absolute top-0 left-0 z-30 w-full">

      {/* TOP BAR */}
      <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md">

        <div className="flex h-20 w-full items-center justify-between px-4 md:px-10">

          {/* LOGO */}
          <Link href="/">

            <div className="relative h-10 w-32 md:h-12 md:w-44">

              <Image
                src={navData.logo}
                alt="The Rudraksh Retreat"
                fill
                priority
                className="object-contain"
              />

            </div>

          </Link>

          {/* BUTTON */}
          <button className="flex h-8 items-center gap-2 rounded-[4px] bg-primary px-2 md:px-6 py-2 md:py-3 text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] text-white transition-all hover:opacity-90">

            <span>{navData.button.label}</span>

            {Icon && <Icon />}

          </button>

        </div>

      </nav>



    </header>

  );
}