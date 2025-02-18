"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
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
  ];

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-[60] w-14 h-14 flex flex-col justify-center items-center gap-1.5 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 bg-black transition-all duration-300 ${
            isOpen 
              ? "w-8 rotate-45 translate-y-2.5" 
              : "w-8"
          }`}
        />
        <span
          className={`h-0.5 bg-black transition-all duration-300 ${
            isOpen 
              ? "w-8 opacity-0" 
              : "w-6"
          }`}
        />
        <span
          className={`h-0.5 bg-black transition-all duration-300 ${
            isOpen 
              ? "w-8 -rotate-45 -translate-y-2.5" 
              : "w-4"
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-[40] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-[50] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-8">
          <nav className="mt-16">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-3xl font-light hover:text-gray-600 transition-colors ${
                      pathname === item.href ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto">
            <div className="text-gray-500">
              <h3 className="text-lg font-medium mb-2">Contact Info</h3>
              <p>email@example.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 