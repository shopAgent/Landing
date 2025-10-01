"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Menu, X, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Handle scroll events only
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Header animation on scroll
    const header = headerRef.current;
    if (!header) return;

    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    // Nav animation
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700/50 shadow-lg dark:shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center space-x-2">
            <img
              src="/mudda-logo.png"
              alt="Mudda Logo"
              className="w-8 h-8 rounded-lg shadow-lg"
            />
            <span
              className={`text-xl font-bold ${
                isScrolled
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Mudda
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-gray-700 dark:text-white/90 hover:text-primary-600 dark:hover:text-white"
              }`}
            >
              Features
            </a>
            {/* <a
              href="#pricing"
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-gray-700 dark:text-white/90 hover:text-primary-600 dark:hover:text-white"
              }`}
            >
              Pricing
            </a>
            <a
              href="#docs"
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  : "text-gray-700 dark:text-white/90 hover:text-primary-600 dark:hover:text-white"
              }`}
            >
              Docs
            </a> */}
            <a
              href="https://43.203.220.15/download/mudda"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Get Started</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20"
              }`}
            >
              {isMenuOpen ? (
                <X
                  className={`w-5 h-5 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-5 h-5 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-lg mt-2 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              {/* <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a> */}
              <a
                href="https://43.203.220.15/download/mudda"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                <span>Get Started</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
