"use client";

import { useLocomotiveScroll } from "@/Provider/Locomotiveprovider";
import { useEffect } from "react";


export default function SectionReveal({
  children,
  delay = 0,
  className = "",
}) {
  const scrollRef = useLocomotiveScroll();

  useEffect(() => {
    // 🔑 Register element AFTER mount
    if (scrollRef?.current) {
      scrollRef.current.update();
    }
  }, [scrollRef]);

  return (
    <div
      data-scroll
      data-scroll-class="is-visible"
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-up ${className}`}
    >
      {children}
    </div>
  );
}
