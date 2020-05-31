import { useState, useEffect } from "react";

export function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      isMobile: isClient ? window.innerWidth <= 760 : false,
    };
  }

  const [windowSize, setWindowSize] = useState<IWindowSize>(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export interface IWindowSize {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
}
