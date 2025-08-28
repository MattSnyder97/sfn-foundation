"use client";
import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-primary text-white print:hidden">
      <div className="container-padding mx-auto py-20">
        {/* Main Footer Content */}
        {/* Logo */}
        <div className="mb-12 flex justify-center md:justify-start">
          <Link href="/">
            <Image
              src="/logos/logoWhite.svg"
              alt="SFN Foundation Logo"
              width={240}
              height={41}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  What is SFN?
                </Link>
              </li>
              <li>
                <Link href="/resources/newly-diagnosed" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  Newly Diagnosed
                </Link>
              </li>
              <li>
                <Link href="/resources/specialists" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  Find a Specialist
                </Link>
              </li>
              <li>
                <Link href="/resources/dictionary" className="opacity-80 hover:opacity-100 hover:underline transition-all">
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
                <Link href="/contact" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  FAQs
                </Link>
              </li>
                <li>
                <Link href="/resources/support-group" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  Support Group
                </Link>
              </li>
              <li>
                <Link href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:underline transition-all">
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
                  href="/research/portal" 
                  className="opacity-80 hover:opacity-100 hover:underline transition-all flex items-center justify-center md:justify-start gap-2"
                >
                  <Lock size={14} />
                  Research Portal
                </Link>
              </li>
              <li>
                <Link href="/resources" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  Medical Resources
                </Link>
              </li>
              <li>
                <Link href="/resources" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  Ask SFN Expert
                </Link>
              </li>
              <li>
                <Link href="https://clinicaltrials.gov/search?cond=small%20fiber%20neuropathy" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:underline transition-all">
                  Clinical Trials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-white/16 border-opacity-20 pt-8">
          {/* Copyright and Legal */}
          <div className="text-center md:text-left mb-8">
            <p className="text-sm opacity-70 mb-4">
              © Copyright {new Date().getFullYear()} the Small Fiber Neuropathy Foundation. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-sm">
              <Link href="/privacy-policy" className="opacity-70 hover:opacity-100 hover:underline transition-all">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="opacity-70 hover:opacity-100 hover:underline transition-all">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="opacity-70 hover:opacity-100 hover:underline transition-all">
                Accessibility
              </Link>
              <Link href="/disclaimer" className="opacity-70 hover:opacity-100 hover:underline transition-all">
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
              className="flex items-center space-x-2 text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200 group cursor-pointer"
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