"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../ui/Button";

export default function Hero() {
  const headingRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rowInners =
        headingRef.current!.querySelectorAll<HTMLElement>(".row-inner");

      gsap.from(rowInners, {
        yPercent: 110,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        delay: 0.1,
      });

      gsap.from(actionsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-14 h-screen">
      <div
        ref={headingRef}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* row 1 */}
        <div className="overflow-hidden">
          <div className="row-inner flex items-baseline">
            <span className="font-retail text-[121.85px] tracking-[-0.08em] leading-[117%]">
              Hamza
            </span>
            <span className="font-swear text-[121.85px] leading-[117%]">
              &nbsp;is a
            </span>
          </div>
        </div>

        {/* row 2 */}
        <div className="overflow-hidden">
          <div className="row-inner flex items-baseline">
            <span className="font-swear text-[121.85px] leading-[117%]">
              product&nbsp;
            </span>
            <span className="font-retail text-[121.85px] tracking-[-0.08em] leading-[117%] font-normal">
              designer
            </span>
            <span className="font-swear text-[121.85px] leading-[117%]">
              &nbsp;turned
            </span>
          </div>
        </div>

        {/* row 3 */}
        <div className="overflow-hidden">
          <div className="row-inner flex items-baseline">
            <span className="font-swear text-[121.85px] leading-[117%]">
              software&nbsp;
            </span>
            <span className="font-retail text-[121.85px] tracking-[-0.08em] leading-[117%] font-normal">
              engineer
            </span>
          </div>
        </div>
      </div>

      <div
        ref={actionsRef}
        className="flex w-md items-center whitespace-nowrap text-[16px] font-retail"
      >
        <Button variant="filled">See my work</Button>
        <div className="w-full h-px bg-black"></div>
        <Button variant="outline">Talk to me</Button>
      </div>
    </div>
  );
}
