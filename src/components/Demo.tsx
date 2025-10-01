"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageCircle,
  Send,
  User,
  Bot,
  ArrowRight,
  Sparkles,
  Download,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const demoMessages = [
  {
    type: "user",
    message: "Hello! Can you recommend some summer dresses?",
    time: "14:30",
  },
  {
    type: "bot",
    message:
      "Hello! I'd be happy to help you find some summer dresses. Let me show you our current collection.",
    time: "14:30",
  },
  {
    type: "bot",
    message:
      "🌸 Summer Dress Collection\n• Floral Print Dress - $89\n• Linen Dress - $129\n• Maxi Dress - $159\n\nWhich style catches your eye?",
    time: "14:31",
  },
  {
    type: "user",
    message:
      "The floral print dress looks beautiful! What sizes are available?",
    time: "14:32",
  },
  {
    type: "bot",
    message:
      "Here are the available sizes for the Floral Print Dress:\n\n• S (44-55) - Stock: 5\n• M (55-66) - Stock: 8\n• L (66-77) - Stock: 3\n• XL (77-88) - Stock: 2\n\nWhat size would you like?",
    time: "14:32",
  },
];

export default function Demo() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
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

    // Chat container animation
    gsap.fromTo(
      chatRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chatRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  useEffect(() => {
    // Auto-play demo messages
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev < demoMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 새로운 메시지가 추가될 때마다 채팅창을 맨 아래로 스크롤
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [currentMessageIndex]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Live Demo</span>
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            Experience Real{" "}
            <span className="gradient-text">AI Customer Service</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            See how Mudda&apos;s AI naturally converses with customers and
            provides product recommendations in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Demo Chat */}
          <div ref={chatRef} className="order-2 lg:order-1">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Mudda</h3>
                  <p className="text-sm text-primary-100">
                    AI Assistant • Online
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="h-96 overflow-y-auto p-6 space-y-4"
              >
                {demoMessages
                  .slice(0, currentMessageIndex + 1)
                  .map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md p-4 rounded-2xl ${
                          msg.type === "user"
                            ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line leading-relaxed">
                          {msg.message}
                        </p>
                        <p
                          className={`text-xs mt-2 ${
                            msg.type === "user"
                              ? "text-primary-100"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled
                  />
                  <button className="p-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Real-time AI Support Features
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      Natural Conversations
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Accurately understand customer intent and provide
                      contextually appropriate responses using advanced NLP.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      Smart Product Recommendations
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Analyze customer preferences and purchase history to
                      recommend personalized products that increase sales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      Real-time Inventory Check
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Check real-time inventory status and provide accurate
                      information to customers instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-panel">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-xl">
                Get Started Today
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Install Mudda for free and revolutionize your customer
                experience with AI-powered support.
              </p>
              <a
                href="https://43.203.220.15/download/mudda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 font-semibold group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download Mudda</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
