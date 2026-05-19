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

        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">

          {/* LOGO */}
          <Link href="/">

            <div className="relative h-12 w-44">

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
          <button className="flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-xs tracking-[3px] text-white transition-all hover:opacity-90">

            <span>{navData.button.label}</span>

            {Icon && <Icon />}

          </button>

        </div>

      </nav>



    </header>

  );
}