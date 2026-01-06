"use client";

import {
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import { usePathname } from "next/navigation";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContext = createContext(null);
export const useLocomotiveScroll = () => useContext(ScrollContext);

export default function LocomotiveProvider({ children }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const pathname = usePathname();

  // Init Locomotive AFTER DOM paint
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!mounted || !containerRef.current) return;

      requestAnimationFrame(() => {
        scrollRef.current = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          smartphone: { smooth: false },
          tablet: { smooth: false },
        });

        // 🔑 CRITICAL: multiple updates
        scrollRef.current.update();
        setTimeout(() => scrollRef.current?.update(), 100);
        setTimeout(() => scrollRef.current?.update(), 300);
      });
    };

    init();

    return () => {
      mounted = false;
      scrollRef.current?.destroy();
      scrollRef.current = null;
    };
  }, []);

  // Route change update
  useEffect(() => {
    scrollRef.current?.update();
  }, [pathname]);

  return (
    <ScrollContext.Provider value={scrollRef}>
      <div data-scroll-container ref={containerRef}>
        <div data-scroll-section>
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
