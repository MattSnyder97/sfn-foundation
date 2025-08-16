"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-primary text-white">
      <div className="container-padding mx-auto py-20">
        {/* Main Footer Content */}
        <div className="text-center md:text-left">
          {/* Logo and Branding */}
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logoWhite.svg"
                alt="SFN Foundation Logo"
                width={285}
                height={41}
              />
            </Link>
          </div>
          {/* Copyright and Legal */}
          <div className="mb-8">
            <p className="text-sm opacity-70 mb-4">
              © Copyright 2025 the Small Fiber Neuropathy Foundation. All rights reserved.
            </p>
            <p className="text-sm opacity-60 leading-relaxed">
              The SFN Foundation does not provide advice of health conditions. It solely passes
              factual information exclusively related topics. Unless otherwise indicated, the information
              provided is based on professional published research and expert opinion. However, the
              information does not constitute medical or legal advice. For specific medical advice,
              consult a qualified physician. For specific legal advice, consult a qualified attorney.
            </p>
          </div>
          {/* Scroll to Top Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm opacity-90 hover:opacity-100 transition-opacity duration-200 group cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Scroll to Top</span>
              <Image
                src="/icons/arrowUp.svg"
                alt="Arrow up"
                width={6}
                height={11}
                className="group-hover:-translate-y-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}