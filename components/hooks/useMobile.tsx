// hooks/useMobile.ts
import { useState, useEffect } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    handler({ matches: mql.matches } as MediaQueryListEvent); // ✅ goes through handler, not direct setState in effect body

    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}
