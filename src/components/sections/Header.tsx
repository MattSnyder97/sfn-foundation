"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});

  const navLinks = [
    { label: "About SFN", dropdown: true },
    { label: "Research", dropdown: true },
    { label: "Resources", dropdown: true }
  ];

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="w-full bg-white shadow-header relative">
      <div className="container-padding mx-auto flex items-center justify-between py-12">
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
        <div className="hidden md:flex items-center justify-end flex-1 space-x-12">
          {!searchOpen &&
            navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setActiveDropdown(null);
                  }
                }}
              >
                {/* Trigger */}
                <div className="flex items-center space-x-3 cursor-default">
                  <span className="text-base font-medium text-gray-700">
                    {link.label}
                  </span>
                  {link.dropdown && (
                    <Image
                      src="/icons/chevron.svg"
                      alt="Dropdown"
                      width={12}
                      height={12}
                      className={`transition-transform duration-160 ${
                        activeDropdown === link.label ? "scale-y-[-1]" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Invisible buffer */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 h-4 w-full bg-transparent"></div>
                )}

                {/* Dropdown menu */}
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-lg rounded-md z-10 animate-fadeIn">
                    <Link
                      href="#"
                      className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Dropdown Item
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Another Item
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
                placeholder="Search by keyword or phrase"
                autoFocus
                className="border border-gray-300 rounded-lg px-4 py-1.5 w-128 animate-fadeSlideIn"
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="ml-4 transition-opacity duration-300 cursor-pointer"
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
            <div key={link.label}>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleMobileDropdown(link.label)}
              >
                <span className="text-base font-medium text-gray-700">
                  {link.label}
                </span>
                {link.dropdown && (
                  <Image
                    src="/icons/chevron.svg"
                    alt="Expand"
                    width={12}
                    height={12}
                    className={`transition-transform duration-160 ${
                      mobileDropdowns[link.label] ? "scale-y-[-1]" : ""
                    }`}
                  />
                )}
              </div>

              {mobileDropdowns[link.label] && link.dropdown && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="#"
                    className="block text-sm text-gray-700 hover:bg-gray-100 rounded-md px-2 py-2"
                  >
                    Dropdown Item
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm text-gray-700 hover:bg-gray-100 rounded-md px-2 py-2"
                  >
                    Another Item
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
