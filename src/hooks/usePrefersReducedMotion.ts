// Hook by Josh Comeau
// https://www.joshwcomeau.com/react/prefers-reduced-motion/

import { useState, useEffect } from "react";
const QUERY = '(prefers-reduced-motion: no-preference)';
const getInitialState = () => !window.matchMedia(QUERY).matches;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getInitialState
  );
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);
  return prefersReducedMotion;
}

export default usePrefersReducedMotion;