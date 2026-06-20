"use client";

import { useEffect, useState } from "react";

/**
 * Returns true on small/touch viewports where scroll-linked parallax
 * (useScroll + useTransform) tends to jitter because the mobile browser
 * chrome (address bar) resizes the viewport mid-scroll.
 * Used to gate heavy scroll-linked transforms to desktop only.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
