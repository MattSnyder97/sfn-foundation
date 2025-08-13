"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { label: "About SFN", href: "#", dropdown: true },
    { label: "Research", href: "#", dropdown: true },
    { label: "Resources", href: "#", dropdown: true }
  ];

  return (
    <header className="w-full bg-white shadow-header relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-12 px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logos/logo.svg"
            alt="SFN Foundation Logo"
            width={285}
            height={41}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1 space-x-8">
          {!searchOpen &&
            navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center space-x-1">
                  <Link
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-gray-700"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <Image
                      src="/icons/chevron.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={`transition-transform duration-160 ${
                        activeDropdown === link.label ? "scale-y-[-1]" : ""
                      }`}
                      style={{ opacity: 1 }}
                    />
                  )}
                </div>

                {/* Dropdown menu */}
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 animate-fadeIn">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dropdown Item
                    </Link>
                  </div>
                )}
              </div>
            ))}

          {/* Search / Close Icon */}
          <div className="flex items-center">
            {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="border border-gray-300 rounded-lg px-4 py-2 w-128 animate-fadeSlideIn"
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="ml-4 transition-opacity duration-300"
            >
              {searchOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 animate-fadeIn"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className="animate-fadeIn"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-8 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-base font-medium text-gray-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
