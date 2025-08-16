"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ArrowRight,
  Play,
  Zap,
  Shield,
  Users,
  MessageCircle,
  Database,
  Brain,
  Download,
} from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero section entrance animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        featuresRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

    // Parallax effect for background elements
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float parallax-bg"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float parallax-bg"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float parallax-bg"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          >
            <span className="text-gray-900 dark:text-white">
              Transform Your
            </span>
            <br />
            <span className="gradient-text">E-commerce</span>
            <br />
            <span className="text-gray-900 dark:text-white">with AI</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Install Shop Agent like Chatwoot and let AI handle everything from
            product recommendations to order inquiries automatically.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a
              href="https://43.203.220.15/download/shop-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-semibold text-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
            >
              <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Start Free</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            {/* Watch Demo 버튼 주석 처리
            <button className="group px-10 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-xl hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
              <Play className="w-6 h-6" />
              <span>Watch Demo</span>
            </button>
            */}
          </div>

          {/* Feature Highlights */}
          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="group flex items-center justify-center space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg text-gray-900 dark:text-white">
                  5 Min Setup
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Quick installation
                </div>
              </div>
            </div>

            <div className="group flex items-center justify-center space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg text-gray-900 dark:text-white">
                  Security First
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  On-premise deployment
                </div>
              </div>
            </div>

            <div className="group flex items-center justify-center space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg text-gray-900 dark:text-white">
                  24/7 Support
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Always available
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AI Chat Widget
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligent customer support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                DB Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect to your existing data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Smart AI
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Powered by Gemini API
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
