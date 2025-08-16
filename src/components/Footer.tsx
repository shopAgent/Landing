"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageCircle,
  Github,
  Twitter,
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Footer entrance animation
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );

    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 90%",
        },
      }
    );

    // Links animation
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top 90%",
        },
      }
    );

    // Social links animation
    gsap.fromTo(
      socialRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div ref={logoRef} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Shop Agent
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              Transform your e-commerce store with AI-powered customer service.
              24/7 automated support that increases revenue and customer
              satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 text-gray-600 dark:text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 text-gray-600 dark:text-white"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@shopagent.com"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 text-gray-600 dark:text-white"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div ref={linksRef} className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Features
                </a>
              </li>
              {/* <li>
                <a
                  href="#pricing"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Pricing
                </a>
              </li> */}
              <li>
                <a
                  href="https://43.203.220.15/download/shop-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Get Started
                </a>
              </li>
              {/* <li>
                <a
                  href="#docs"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Documentation
                </a>
              </li> */}
            </ul>
          </div>

          {/* Company Links */}
          <div ref={socialRef} className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-4">
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Blog
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Careers
                </a>
              </li> */}
              <li>
                <a
                  href="mailto:contact@shopagent.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Help Center
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Community
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Status
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors font-medium hover:translate-x-1 inline-block"
                >
                  Security
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-6 md:mb-0 flex items-center space-x-2">
            <span>© 2025 Shop Agent. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for e-commerce.</span>
          </div>
          <div className="flex items-center space-x-8 text-sm">
            {/* <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </a> */}
            {/* <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors font-medium"
            >
              Terms of Service
            </a> */}
            <button
              onClick={scrollToTop}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors flex items-center space-x-2 font-medium hover:scale-105"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
