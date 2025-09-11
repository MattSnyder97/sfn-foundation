"use client";
import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Persistent, visible focus styles for keyboard users
  const focusClasses = "focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-opacity-90";

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
              className="hover-scale"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
      <ul className="space-y-3 text-sm">
              <li>
        <Link href="/about" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  About SFN
                </Link>
              </li>
              <li>
        <Link href="/resources/specialists" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Find a Specialist
                </Link>
              </li>
              <li>
        <Link href="/research" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Latest Research
                </Link>
              </li>
              <li>
        <Link href="/resources/newly-diagnosed" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Newly Diagnosed
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Support</h3>
      <ul className="space-y-3 text-sm">
              <li>
        <Link href="/contact" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Contact
                </Link>
              </li>
              <li>
        <Link href="/resources/mutual-aid" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Mutual Aid
                </Link>
              </li>
                <li>
        <Link href="/resources/patient-stories" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Patient Stories
                </Link>
              </li>
              <li>
        <Link href="/resources/support-group" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Support Group
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialists */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Specialists</h3>
      <ul className="space-y-3 text-sm">
              <li>
        <Link href="https://clinicaltrials.gov/search?cond=small%20fiber%20neuropathy" target="_blank" rel="noopener noreferrer" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Clinical Trials
                </Link>
              </li>
              <li>
        <Link href="/research/portal" className={`opacity hover:opacity-100 hover:underline transition-all flex items-center justify-center md:justify-start gap-2 text-shadow-nearInvisible ${focusClasses}`}>
                  <Lock size={14} />
                  Research Portal
                </Link>
              </li>
              <li>
        <Link href="https://www.massgeneralbrigham.org/en/education-and-training/continuing-professional-development" target="_blank" rel="noopener noreferrer" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  Professional Development
                </Link>
              </li>
              <li>
        <Link href="https://www.youtube.com/watch?v=KtNnlY6RUdA" target="_blank" rel="noopener noreferrer" className={`opacity hover:opacity-100 hover:underline transition-all text-shadow-nearInvisible ${focusClasses}`}>
                  SFN Overview Video
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-white/16 border-opacity pt-8">
          {/* Copyright and Legal */}
          <div className="text-center md:text-left mb-8">
            <p className="text-sm opacity mb-4 text-shadow-nearInvisible">
              © Copyright {new Date().getFullYear()} the Small Fiber Neuropathy Foundation. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-sm text-shadow-nearInvisible">
              <Link href="/accessibility" className={`opacity hover:opacity-100 hover:underline transition-all ${focusClasses}`}>
                Accessibility
              </Link>
              <Link href="/disclaimer" className={`opacity hover:opacity-100 hover:underline transition-all ${focusClasses}`}>
                Medical Disclaimer
              </Link>
              <Link href="/privacy-policy" className={`opacity hover:opacity-100 hover:underline transition-all ${focusClasses}`}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className={`opacity hover:opacity-100 hover:underline transition-all ${focusClasses}`}>
                Terms of Use
              </Link>
            </div>

            <p className="text-xs opacity leading-relaxed text-shadow-nearInvisible">
              The SFN Foundation shares factual information based on published research and expert opinion. It does not provide medical or 
              legal advice; consult a qualified professional for specific guidance. The SFN Foundation does not collect or manage donations or money.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm opacity hover:opacity-100 hover:underline transition-all duration-200 group cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Scroll to Top</span>
              <Image
                src="/icons/arrowUp.svg"
                alt="Back to top arrow"
                width={6}
                height={11}
                className="group-hover:-translate-y-1 transition-transform duration-200 text-shadow-nearInvisible"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}