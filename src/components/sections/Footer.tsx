"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-primary text-white">
      <div className="container-padding mx-auto py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about-sfn" className="opacity-80 hover:opacity-100 transition-opacity">
                  What is SFN?
                </Link>
              </li>
              <li>
                <Link href="/symptoms" className="opacity-80 hover:opacity-100 transition-opacity">
                  Newly Diagnosed
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="opacity-80 hover:opacity-100 transition-opacity">
                  Find a Specialist
                </Link>
              </li>
              <li>
                <Link href="/newly-diagnosed" className="opacity-80 hover:opacity-100 transition-opacity">
                  SFN Dictionary
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="opacity-80 hover:opacity-100 transition-opacity">
                  FAQs
                </Link>
              </li>
                <li>
                <Link href="https://discord.gg/UGNhBMkBS7" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                  Support Group
                </Link>
              </li>
              <li>
                <Link href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                  Suicide Hotline
                </Link>
              </li>
            </ul>
          </div>

          {/* For Professionals */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">For Professionals</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/research-portal" 
                  className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center md:justify-start gap-2"
                >
                  <Lock size={14} />
                  Research Portal
                </Link>
              </li>
              <li>
                <Link href="/medical-resources" className="opacity-80 hover:opacity-100 transition-opacity">
                  Medical Resources
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="opacity-80 hover:opacity-100 transition-opacity">
                  Ask SFN Expert
                </Link>
              </li>
              <li>
                <Link href="https://www.mayo.edu/research/clinical-trials/diseases-conditions/neuropathies" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                  Clinical Trials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-white border-opacity-20 pt-8">
          {/* Copyright and Legal */}
          <div className="text-center md:text-left mb-8">
            <p className="text-sm opacity-70 mb-4">
              © Copyright 2025 the Small Fiber Neuropathy Foundation. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-sm">
              <Link href="/privacy-policy" className="opacity-70 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="opacity-70 hover:opacity-100 transition-opacity">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="opacity-70 hover:opacity-100 transition-opacity">
                Accessibility
              </Link>
              <Link href="/disclaimer" className="opacity-70 hover:opacity-100 transition-opacity">
                Medical Disclaimer
              </Link>
            </div>

            <p className="text-xs opacity-60 leading-relaxed">
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