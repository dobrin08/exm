"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ─── Desktop Navbar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[55] hidden md:block transition-all duration-500 ${
          scrolled
            ? "bg-base/95 backdrop-blur-md border-b border-subtle shadow-sm"
            : "bg-base/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="font-display text-xl text-primary transition-opacity duration-300 group-hover:opacity-60">
              John Doe
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] tracking-[0.08em] uppercase px-4 py-2 transition-colors duration-200 cursor-pointer ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-primary transition-all duration-300 ${
                    isActive(item.href) ? "w-4" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── Mobile Burger ─── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 bg-surface border border-subtle rounded-full transition-all duration-300 hover:shadow-md cursor-pointer"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-[1.5px] bg-primary transition-all duration-300 ${
            isOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
          }`}
        />
        <span
          className={`h-[1.5px] bg-primary transition-all duration-300 ${
            isOpen ? "w-5 opacity-0" : "w-3.5 mr-0.5"
          }`}
        />
        <span
          className={`h-[1.5px] bg-primary transition-all duration-300 ${
            isOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-2 mr-2"
          }`}
        />
      </button>

      {/* ─── Mobile Overlay ─── */}
      <div
        className={`fixed inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 z-[40] md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ─── Mobile Sidebar ─── */}
      <div
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-surface border-l border-subtle z-[50] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col px-10 py-12">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-display text-xl text-primary"
          >
            John Doe
          </Link>

          <div className="w-8 h-[1.5px] bg-subtle mt-6 mb-10" />

          <nav className="flex-1">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center py-3 transition-all duration-200 cursor-pointer ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    <span
                      className={`inline-block w-0 h-[1.5px] mr-0 transition-all duration-200 ${
                        isActive(item.href)
                          ? "w-5 bg-primary mr-4"
                          : "group-hover:w-3 group-hover:bg-secondary group-hover:mr-3"
                      }`}
                    />
                    <span className="text-2xl font-light tracking-wide">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-subtle pt-8">
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-4">
              Get in Touch
            </p>
            <div className="space-y-2 text-secondary text-sm">
              <a
                href="mailto:hello@johndoe.com"
                className="block hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                hello@johndoe.com
              </a>
              <a
                href="tel:+15551234567"
                className="block hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
