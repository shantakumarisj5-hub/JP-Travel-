"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-5 sm:pt-5">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[#577877]/30 bg-[#162623]/95 px-3 py-2.5 shadow-[0_10px_35px_rgba(22,38,35,0.18)] backdrop-blur-xl sm:px-5 sm:py-3">
        <div className="flex items-center justify-between">

          {/* LOGO + BRAND */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            {/* Logo */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#F0F5F7] sm:h-10 sm:w-10 sm:rounded-xl">
              <img
                src="/images/brand/jp-wings-logo.png"
                alt="JP Wings Travel"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Brand name - visible on mobile */}
            <div className="min-w-0">
              <p className="truncate text-[12px] font-bold tracking-[0.04em] text-[#F0F5F7] sm:text-sm">
                JP WINGS
              </p>

              <p className="text-[8px] uppercase tracking-[0.2em] text-[#f6f0ef] sm:text-[9px]">
                Travel
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-xs font-medium text-[#F0F5F7]/75 transition-all duration-300 hover:bg-[#295255] hover:text-[#F0F5F7]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#295255] px-4 py-2.5 text-xs font-semibold text-[#F0F5F7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#577877] sm:flex"
          >
            Plan a Trip
            <ArrowUpRight size={14} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#577877]/40 text-[#F0F5F7] transition hover:bg-[#295255] lg:hidden sm:h-10 sm:w-10"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="mt-3 border-t border-[#577877]/20 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[#F0F5F7]/80 transition-all duration-300 hover:bg-[#295255] hover:text-[#F0F5F7]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#295255] px-4 py-3 text-sm font-semibold text-[#F0F5F7] transition hover:bg-[#577877]"
              >
                Plan Your Trip
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}