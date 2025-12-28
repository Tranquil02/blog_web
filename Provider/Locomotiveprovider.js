"use client";

import { useEffect, useRef, createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContext = createContext(null);
export const useLocomotiveScroll = () => useContext(ScrollContext);

export default function LocomotiveProvider({ children }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!mounted) return;

      const instance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        smartphone: { smooth: false },
        tablet: { smooth: false },
      });

      scrollRef.current = instance;
      setScroll(instance);
      instance.update();
    })();

    return () => {
      mounted = false;
      scrollRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.update();
  }, [pathname]);

  return (
    <ScrollContext.Provider value={scroll}>
      <div data-scroll-container ref={containerRef}>
        <div data-scroll-section>{children}</div>
      </div>
    </ScrollContext.Provider>
  );
}
