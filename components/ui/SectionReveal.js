"use client";

export default function SectionReveal({ children, delay = 0, className = "" }) {
  return (
    <div
      data-scroll
      data-scroll-class="is-visible"
      data-scroll-repeat
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-up ${className}`}
    >
      {children}
    </div>
  );
}
