"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const closeTimer = useRef<number | null>(null);

  const navLinks = [
    {
      label: "About SFN",
      dropdown: true,
      items: [
        { label: "What is SFN", href: "/about/sfn" },
        { label: "Symptoms", href: "/about/symptoms" },
        { label: "Causes", href: "/about/causes" },
        { label: "Treatments", href: "/about/treatments" },
      ],
    },
    {
      label: "Research",
      dropdown: true,
      items: [
        { label: "Latest Research", href: "/research/latest" },
        { label: "Clinical Trials", href: "/research/clinical-trials" },
      ],
    },
    {
      label: "Resources",
      dropdown: true,
      items: [
        { label: "Newly Diagnosed", href: "/resources/newly-diagnosed" },
        { label: "Support Group", href: "https://discord.gg/UGNhBMkBS7", target: "_blank" },
        { label: "Caregiver Tips", href: "/resources/caregiver-tips" },
        { label: "Approved Doctors", href: "/resources/doctors" },
        { label: "SFN Dictionary", href: "/resources/dictionary" },
        { label: "Supplements", href: "/resources/supplements" },
        { label: "FAQs", href: "/#faqs" },
      ],
    },
  ];

  const openDropdown = (label: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimer.current = null;
    }, 220);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="w-full bg-white shadow-header relative md:sticky md:top-0 md:z-50">
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
            navLinks.map((link) => {
              const isActive = activeDropdown === link.label;
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={scheduleClose}
                >
                  {/* Trigger */}
                  <div className="flex items-center space-x-3 cursor-default">
                    <span
                      className={`text-base font-medium transition-colors duration-150 ${
                        isActive ? "text-primary" : "text-dark group-hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </span>
                    {link.dropdown && (
                      <Chevron
                        className={`h-3.5 w-3.5 transition-transform duration-160 ${
                          isActive
                            ? "scale-y-[-1] text-primary"
                            : "group-hover:text-primary"
                        }`}
                      />
                    )}
                  </div>

                  {/* Dropdown */}
                  {isActive && link.dropdown && (
                    <div
                      className="absolute left-0 top-full z-20 w-56 -translate-x-4"
                      onMouseEnter={() => openDropdown(link.label)}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="pt-2">
                        <div className="bg-white shadow-lg rounded-md overflow-hidden">
                          {/* Top border cap */}
                          <div className="h-2 bg-primary rounded-t-md" />
                          {link.items?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              target={item.target}
                              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/8"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

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
              aria-label={searchOpen ? "Close search" : "Open search"}
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
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
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
              <button
                type="button"
                className="w-full flex items-center justify-between text-left text-base font-medium text-gray-700"
                onClick={() => toggleMobileDropdown(link.label)}
              >
                <span>{link.label}</span>
                {link.dropdown && (
                  <Chevron
                    className={`h-3.5 w-3.5 transition-transform duration-160 ${
                      mobileDropdowns[link.label]
                        ? "scale-y-[-1] text-primary"
                        : ""
                    }`}
                  />
                )}
              </button>

              {mobileDropdowns[link.label] && link.dropdown && (
                <div className="mt-2 pl-4 space-y-2">
                  {link.items?.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.target}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="block text-sm text-gray-700 hover:bg-gray-100 rounded-md px-2 py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}