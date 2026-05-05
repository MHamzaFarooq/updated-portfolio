"use client";
import { useRef } from "react";

export default function Navbar() {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div
        ref={headerRef}
        className="h-[99.78px] flex items-center justify-between py-[23.75px] "
      >
        <div>Hamza</div>
        <ul className="flex items-center text-[15px] font-retail gap-6">
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
