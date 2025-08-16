"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageCircle,
  Database,
  Shield,
  Zap,
  Brain,
  Settings,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Download,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MessageCircle,
    title: "AI Chat Widget",
    description:
      "Add a chat button to the bottom-right corner like Chatwoot and let AI handle customer inquiries automatically.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Connect to your existing e-commerce database to access product information and order history in real-time.",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Brain,
    title: "Smart AI",
    description:
      "Use Gemini AI to provide natural conversations and accurate product recommendations.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "On-premise installation ensures secure database access and maintains data privacy.",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    gradient: "from-red-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description:
      "Install via npm package and start your AI customer service in under 5 minutes.",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Settings,
    title: "Easy Configuration",
    description:
      "Visually select tables and columns through the web interface to configure features.",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

const benefits = [
  "24/7 Automated Customer Service",
  "Reduce Labor Costs by 80%",
  "Faster Response Times",
  "Improve Customer Satisfaction",
  "Increase Sales with Product Recommendations",
  "Multi-language Support (Coming Soon)",
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
        },
      }
    );

    // Features grid animation
    const featureCards = featuresRef.current?.children;
    if (featureCards) {
      gsap.fromTo(
        featureCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Benefits animation
    gsap.fromTo(
      benefitsRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            Transform Customer Experience with <br />
            <span className="gradient-text">AI-Powered Features</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Shop Agent automates all customer service functions with AI to
            simultaneously improve customer satisfaction and increase revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Features Grid */}
          <div
            ref={featuresRef}
            className="lg:col-span-2 grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Sidebar */}
          <div ref={benefitsRef} className="lg:col-span-1">
            <div className="sticky top-24 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Key Benefits
                </h3>
              </div>

              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="cta-panel mt-10">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-xl">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Install Shop Agent for free and revolutionize your customer
                  experience with AI-powered support.
                </p>
                <a
                  href="https://43.203.220.15/download/shop-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 font-semibold group"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Download Shop Agent</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
