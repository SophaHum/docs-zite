"use client";

import { useTheme } from "next-themes";

export function HeroPattern() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(0px,calc(50%-45rem))] top-0 h-[42rem] w-[84rem] stroke-gray-200 dark:stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(12 12)"
            x="50%"
            y="100"
          >
            <path
              d="M.5 .5l40 40m-40 0l40-40"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}