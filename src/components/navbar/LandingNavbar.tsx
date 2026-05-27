import Image from "next/image";
import Link from "next/link";
import { navData } from "./navData";

const LandingNavbar = () => {
  const Icon = navData.button.icon;
  return (
    <header className="max_screen_width  border-b border-white/10 backdrop-blur-md z-30 w-full">
      {/* TOP BAR */}
      <nav className="max_width">
        <div className="flex h-20 w-full items-center justify-between">
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
          <Link
            href={navData.button.href}
            target="_blank"
            className="flex items-center gap-2 rounded-sm bg-primary px-2 md:px-6 py-2 md:py-3 text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] text-white transition-all hover:opacity-90"
          >
            {navData.button.label}
            <Icon />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
