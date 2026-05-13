"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroTitle from "../ui/HeroTitle";

function UpdatedHero() {
  const headingRef = useRef<HTMLDivElement>(null);

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
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        ref={headingRef}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* Row 1 */}
        <div className="overflow-hidden">
          <div className="row-inner flex gap-x-6 items-baseline justify-center">
            <HeroTitle fontName="retail" tracking={true}>
              Hamza
            </HeroTitle>
            <HeroTitle fontName="swear">is</HeroTitle>
            <HeroTitle fontName="swear">a</HeroTitle>
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="row-inner flex gap-x-6 items-baseline justify-center">
            <HeroTitle fontName="swear">product</HeroTitle>
            <HeroTitle fontName="retail" tracking={true}>
              designer
            </HeroTitle>
            <HeroTitle fontName="swear">turned</HeroTitle>
          </div>
        </div>

        {/* Row 3 */}
        <div className="overflow-hidden">
          <div className="row-inner flex gap-x-6 items-baseline justify-center">
            <HeroTitle fontName="swear">software</HeroTitle>
            <HeroTitle fontName="retail" tracking={true}>
              engineer
            </HeroTitle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatedHero;
