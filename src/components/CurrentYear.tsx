"use client";

import { useEffect, useRef } from "react";

const CurrentYear = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return <span ref={ref}>2026</span>;
};

export default CurrentYear;