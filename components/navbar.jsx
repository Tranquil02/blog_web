"use client";

import React, { useState } from "react";
import { Gem, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Quotes", href: "/quotes" },
  { label: "Contact", href: "/connect" },
];

export default function Navbar({ isScrolled, onArticleBack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log({ isScrolled });

  return (
    <>
      <nav
        className={`
          navbar fixed top-0 w-full z-[100] py-6 lg:py-12 transition-all duration-700 bg-transparentborder-b border-transparent backdrop-blur-0
          ${isScrolled
            ? "bg-[var(--bg-primary)]/85 backdrop-blur-2xl py-4 border-b border-[var(--border-light)] shadow-2xl"
            : "py-6 lg:py-12"
          }
        `}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Brand */}
          <div
            className="flex flex-col items-center justify-start cursor-pointer group"
            onClick={() => {
              if (onArticleBack) onArticleBack();
              // window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-9 h-9 lg:w-11 lg:h-11 mb-1">
              <div
                className="
                  absolute inset-0
                  border border-[var(--accent-secondary)]/30
                  rounded-full
                  group-hover:border-[var(--accent-secondary)]
                  transition-all duration-700
                "
              />
              <div
                className="
                  absolute inset-2
                  bg-[var(--text-heading)]
                  rounded-full
                  flex items-center justify-center
                  group-hover:scale-75
                  transition-transform duration-700
                "
              >
                <Gem size={16} className="text-[var(--bg-primary)]" />
              </div>
            </div>

            <span
              className="
                hidden sm:block
                text-[11px] font-black uppercase tracking-[0.9em]
                ml-[0.9em]
                text-[var(--text-heading)]
                font-editorial italic
              "
            >
              Midnight
            </span>

            <span
              className="
                sm:hidden
                text-[9px] font-black uppercase tracking-[0.5em]
                ml-[0.5em]
                text-[var(--text-heading)]
              "
            >
              MIDNIGHT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div
            className="
              hidden lg:flex items-center gap-12
              text-[10px] font-black uppercase tracking-[0.5em]
              text-[var(--text-muted)]
            "
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[var(--accent-secondary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>



          {/* Actions */}
          <div className="flex items-center gap-4 lg:gap-10">
            <button
              className="
                px-5 lg:px-10 py-2 lg:py-3
                bg-[var(--accent-secondary)]
                text-[var(--bg-primary)]
                text-[10px] font-black uppercase tracking-[0.3em]
                rounded-full
                hover:bg-[var(--text-heading)]
                transition-all
                shadow-xl
                active:scale-95
              "
            >
              Subscribe
            </button>

            <button
              className="lg:hidden text-[var(--accent-secondary)] p-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile View  */}
      <div
        className={`
          fixed inset-0 z-[110]
          bg-[var(--bg-primary)]
          transition-transform duration-700
          lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-10 h-full flex flex-col justify-center items-center gap-12 relative">

          <button
            onClick={() => setIsMenuOpen(false)}
            className="
              absolute top-8 right-8
              text-[var(--accent-secondary)]
              hover:rotate-90
              transition-transform duration-300
            "
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>

          <div className="space-y-8 text-center">
            {["Archives", "Essays", "Blog", "Connect", "Subscribe"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block
                    text-5xl
                    font-editorial italic
                    text-[var(--text-heading)]
                    hover:text-[var(--accent-secondary)]
                    transition-colors
                  "
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div
            className="
              mt-12
              text-[10px] font-black uppercase tracking-[0.5em]
              text-[var(--text-muted)]
            "
          >
            Volume IV Edition
          </div>
        </div>
      </div>
    </>
  );
}
