import { useState, useEffect } from "react";

export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}
