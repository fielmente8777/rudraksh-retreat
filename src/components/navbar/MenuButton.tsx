"use client";

import { useWebContext } from "@/context-api/WebContext";

export default function MenuButton({ color="white" }: { color?: string }) {
  const { isOpenNavBar, setIsOpenNavBar } = useWebContext();

  return (
    <button
      onClick={() => setIsOpenNavBar(!isOpenNavBar)}
      className="relative flex h-10 w-10 items-center justify-center z-50"
      aria-label="Menu"
    >
      {/* TOP */}
      <span
        className={`absolute h-0.5 w-6 bg-${color} transition-all duration-500 ease-in-out
        ${isOpenNavBar ? "rotate-45" : "-translate-y-2"}`}
      />

      {/* MIDDLE */}
      <span
        className={`absolute h-0.5 w-6 bg-${color} transition-all duration-500 ease-in-out
        ${isOpenNavBar ? "opacity-0" : "opacity-100"}`}
      />

      {/* BOTTOM */}
      <span
        className={`absolute h-0.5 w-6 bg-${color} transition-all duration-500 ease-in-out
        ${isOpenNavBar ? "-rotate-45" : "translate-y-2"}`}
      />
    </button>
  );
}
