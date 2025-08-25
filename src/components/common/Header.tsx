"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const closeTimer = useRef<number | null>(null);

const navLinks = [
  {
    label: "About SFN",
    href: "/about",
    dropdown: true,
    items: [
      { label: "Causes", href: "/about/causes" },
      { label: "Diagnosis", href: "/about/diagnosis" },
      { label: "Symptoms", href: "/about/symptoms" },
      { label: "Treatments", href: "/about/treatments" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    dropdown: true,
    items: [
      { label: "Clinical Trials", href: "https://clinicaltrials.gov/search?cond=small%20fiber%20neuropathy", target: "_blank" },
      { label: "Latest Research", href: "/#news" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: true,
    items: [
      { label: "Caregiver Tips", href: "/resources/caregiver-tips" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Find a Specialist", href: "/resources/specialists" },
      { label: "Newly Diagnosed", href: "/resources/newly-diagnosed" },
      { label: "Mutual Aid", href: "/resources/mutual-aid" },
      { label: "SFN Dictionary", href: "/resources/dictionary" },
      { label: "Support Group", href: "/resources/support-group",},
      { label: "Supplements", href: "/resources/supplements" },
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
                  {/* Trigger - Now clickable if href exists */}
                  <div className="flex items-center space-x-3">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className={`text-base font-medium transition-colors duration-150 cursor-pointer ${
                          isActive ? "text-primary" : "text-dark group-hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span
                        className={`text-base font-medium transition-colors duration-150 cursor-default ${
                          isActive ? "text-primary" : "text-dark group-hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </span>
                    )}
                    {link.dropdown && (
                      <ChevronDown
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-all duration-160 cursor-pointer ${
                          isActive
                            ? "scale-y-[-1] text-primary"
                            : "text-dark group-hover:text-primary"
                        }`}
                      />
                    )}
                  </div>

                  {/* Dropdown */}
                  {isActive && link.dropdown && (
                    <div
                      className="absolute left-0 top-full z-20 w-48 -translate-x-4"
                      onMouseEnter={() => openDropdown(link.label)}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="pt-4">
                        <div className="bg-white shadow-lg rounded-md overflow-hidden">
                          {/* Top border cap */}
                          <div className="h-2 bg-primary rounded-t-md" />
                          {link.items?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              target={item.target}
                              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                              className="block px-4 py-3 text-sm text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
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
              <SearchBar />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="ml-4 transition-opacity duration-300 cursor-pointer"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700 animate-fadeIn"
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
                  width={16}
                  height={16}
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
            className="relative w-6 h-6"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  mobileOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  mobileOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg container-padding py-4 space-y-4">
          {/* Mobile Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search by keyword or phrase"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <div key={link.label} className="text-right">
              <div className="w-full flex items-center justify-end text-right text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200 group gap-3">
                {/* On mobile: if dropdown, use button to open dropdown only; if not, allow navigation */}
                {link.dropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                    aria-expanded={!!mobileDropdowns[link.label]}
                  >
                    {link.label}
                    <ChevronDown
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-all duration-160 ${
                        mobileDropdowns[link.label]
                          ? "scale-y-[-1] text-primary"
                          : "text-gray-700 group-hover:text-primary"
                      }`}
                    />
                  </button>
                ) : (
                  link.href ? (
                    <Link
                      href={link.href}
                      className="text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span>{link.label}</span>
                  )
                )}
              </div>

              {mobileDropdowns[link.label] && link.dropdown && (
                <div className="mt-2 pr-4 space-y-2 text-right mb-8">
                  {link.items?.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.target}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="block text-sm text-gray-700 hover:text-primary hover:underline transition-colors duration-200 rounded-md px-2 py-2"
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