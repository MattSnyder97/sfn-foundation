"use client";
import { useRef, useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SearchBar from "@/components/primitives/SearchBar";

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
      { label: "Latest Research", href: "/research" },
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
      { label: "Patient Stories", href: "/resources/patient-stories" },
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
  // (do not aggressively move focus here) — when opened via focus, Tab will move into menu items
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimer.current = null;
    }, 220);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // refs for menu items per dropdown label to support arrow-key navigation
  const menuItemRefs = useRef<Record<string, HTMLElement[]>>({});

  // Keyboard navigation for menu items: ArrowUp/ArrowDown and Escape
  const onMenuKeyDown = (e: React.KeyboardEvent, label: string) => {
    const items = menuItemRefs.current[label] ?? [];
    if (!items.length) return;
    const idx = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = items[Math.min(idx + 1, items.length - 1)];
      next?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = items[Math.max(idx - 1, 0)];
      prev?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeDropdown();
    }
  };

  // Close dropdown when focus moves outside of header menus
  useEffect(() => {
    function handleFocusIn(e: FocusEvent) {
      if (!activeDropdown) return;
      const menuEl = document.getElementById(`menu-${activeDropdown.replace(/\s+/g, '-')}`);
      // find the toggle button by aria-controls
      const toggle = document.querySelector(`[aria-controls="menu-${activeDropdown.replace(/\s+/g, '-')}"]`);
      const target = e.target as Node | null;
      if (!target) return;
      if (menuEl && menuEl.contains(target)) return; // still inside menu
      if (toggle && toggle.contains(target)) return; // still on toggle
      // focus moved outside: close
      setActiveDropdown(null);
    }
    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [activeDropdown]);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="w-full bg-white default-shadow relative md:sticky md:top-0 md:z-50">
      <div className="container-padding mx-auto flex items-center justify-between py-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logos/logo.svg"
            alt="SFN Foundation Logo"
            width={285}
            height={41}
            className="hover-scale"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1 space-x-12 relative">
          {/* Hide category links when search is open */}
          {!searchOpen && navLinks.map((link) => {
            const isActive = activeDropdown === link.label;
            return (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => openDropdown(link.label)}
                onMouseLeave={scheduleClose}
              >
                {/* ...existing code for nav links... */}
                  <div className="flex flex-col items-center relative group/nav">
                  <button
                    className={`flex items-center space-x-3 px-2 py-1 rounded transition-colors duration-150 cursor-pointer bg-transparent border-none outline-none focus:outline-none ${
                      isActive ? "text-primary" : "text-dark group-hover:text-primary"
                    }`}
                    style={{ background: "none" }}
                    tabIndex={0}
                    aria-haspopup={link.dropdown ? "menu" : undefined}
                    aria-controls={link.dropdown ? `menu-${link.label.replace(/\s+/g, '-')}` : undefined}
                    aria-expanded={isActive}
                    onFocus={() => link.dropdown && openDropdown(link.label)}
                    onKeyDown={(e) => {
                      // Open menu with Enter/Space/ArrowDown
                      if (link.dropdown && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
                        e.preventDefault();
                        openDropdown(link.label);
                      }
                      if (e.key === 'Escape') {
                        closeDropdown();
                      }
                    }}
                  >
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-base font-medium"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-base font-medium cursor-default">{link.label}</span>
                    )}
                    {link.dropdown && (
                      <ChevronDown
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-all duration-160 ${
                          isActive
                            ? "scale-y-[-1] text-primary"
                            : "text-dark group-hover:text-primary"
                        }`}
                      />
                    )}
                  </button>
                  <span
                    className="absolute left-0 right-0 -bottom-1 h-[1.2px] bg-primary scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-160 origin-left rounded-full"
                  />
                </div>
                {isActive && link.dropdown && (
                  <div
                    id={`menu-${link.label.replace(/\s+/g, '-')}`}
                    role="menu"
                    className="absolute left-0 top-full z-20 w-48 -translate-x-4"
                    onMouseEnter={() => openDropdown(link.label)}
                    onMouseLeave={scheduleClose}
                    onKeyDown={(e) => onMenuKeyDown(e, link.label)}
                  >
                    <div className="pt-4">
                      <div className="bg-white default-shadow rounded-md overflow-hidden">
                        <div className="h-2 bg-primary rounded-t-md" />
                        {link.items?.map((item, idx) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            target={item.target}
                            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                            role="menuitem"
                            ref={(el: HTMLElement | null) => {
                              if (!menuItemRefs.current[link.label]) menuItemRefs.current[link.label] = [];
                              menuItemRefs.current[link.label][idx] = el as HTMLElement;
                            }}
                            tabIndex={0}
                            className="block px-4 py-3 text-sm text-gray hover:text-primary hover:underline transition-colors duration-200"
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
            <button
              onClick={() => {
                if (!searchOpen && typeof window !== 'undefined') {
                  window.__searchAutoFocus = true;
                }
                setSearchOpen(!searchOpen);
              }}
              className="ml-4 transition-opacity duration-300 cursor-pointer"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray animate-fadeIn hover-scale"
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
                  className="hover-scale"
                />
              )}
            </button>
            {/* Overlay search bar absolutely when open, shifted left to show close button */}
            {searchOpen && (
              <div className="absolute right-16 top-0 w-[28rem] max-w-full h-full flex items-center z-30 pointer-events-auto">
                <div className="w-full h-[3.5rem] flex items-center">
                  <SearchBar />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="relative w-12 h-12"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-6 bg-gray transform transition duration-300 ease-in-out ${
                  mobileOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-gray transform transition duration-300 ease-in-out ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-gray transform transition duration-300 ease-in-out ${
                  mobileOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white default-shadow container-padding py-4 space-y-4">
          {/* Mobile Search Bar (use primitives SearchBar) */}
          <div className="mb-8">
            <SearchBar />
          </div>

          {/* Navigation Links */}
          {navLinks.map((link, idx) => (
            <div
              key={link.label}
              className="text-left w-full"
            >
              {/* Divider above each category except first */}
              {idx !== 0 && <hr className="border-t border-gray-200 my-2" />}
              <div className={`w-full flex items-center text-left group gap-3 ${mobileDropdowns[link.label] ? "" : ""}`}>
                {/* On mobile: if dropdown, use button to open dropdown only; if not, allow navigation */}
                {link.dropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(link.label)}
                    className={`w-full text-left text-xl flex items-center gap-2 transition-colors duration-200 ${mobileDropdowns[link.label] ? "font-bold text-primary" : "font-semibold text-dark hover:text-primary"}`}
                    aria-expanded={!!mobileDropdowns[link.label]}
                    style={{padding: "0.5rem 0"}}
                  >
                    {link.label}
                    <ChevronDown
                      strokeWidth={2.5}
                      className={`h-4 w-4 transition-all duration-160 ${
                        mobileDropdowns[link.label]
                          ? "scale-y-[-1] text-primary"
                          : "text-gray group-hover:text-primary"
                      }`}
                    />
                  </button>
                ) : (
                  link.href ? (
                    <Link
                      href={link.href}
                      className={`w-full text-left text-xl transition-colors duration-200 ${mobileDropdowns[link.label] ? "font-bold text-primary" : "font-semibold text-gray hover:text-primary"}`}
                      style={{padding: "0.5rem 0"}}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="text-xl font-semibold text-gray" style={{padding: "0.5rem 0"}}>{link.label}</span>
                  )
                )}
              </div>
              {mobileDropdowns[link.label] && link.dropdown && (
                <div className="mt-2 pl-2 space-y-2 text-left">
                  {link.items?.map((item, subIdx) => (
                    <React.Fragment key={item.label + '-' + subIdx}>
                      {/* Divider above each sublink except first */}
                      {subIdx !== 0 && <hr className="border-t border-gray-100 my-1" />}
                      <Link
                        href={item.href}
                        target={item.target}
                        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                        className="block text-lg text-gray hover:text-primary hover:underline transition-colors duration-200 rounded-md px-2 py-2"
                      >
                        {item.label}
                      </Link>
                    </React.Fragment>
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