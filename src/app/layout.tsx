import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mudda - AI Customer Service Chatbot | E-commerce Automation Solution",
  description:
    "Install AI customer service chatbot in 5 minutes. 24/7 automated support, product recommendations, order inquiries. Boost customer satisfaction and reduce labor costs by 80%. Easy installation like Chatwoot with Gemini AI-powered smart support.",
  keywords:
    "AI chatbot, customer service chatbot, e-commerce chatbot, AI customer support, shopping mall automation, automated customer service, customer support automation, AI customer service, chatbot, e-commerce chatbot, shopping mall automation, customer support automation, AI assistant, Chatwoot, Gemini AI, AI 챗봇, 고객상담 챗봇, 쇼핑몰 챗봇, AI 고객센터, 이커머스 챗봇, 자동 고객응대, 고객상담 자동화, 쇼핑몰 자동화, 고객서비스 AI, 상담 챗봇, 온라인 쇼핑 챗봇, 인공지능 상담원, 무인 고객센터, 24시간 고객상담",
  authors: [{ name: "Mudda Team" }],
  creator: "Mudda",
  publisher: "Mudda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.mudda.co.kr"),
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/ko",
      "en-US": "/en",
    },
  },
  icons: {
    icon: [
      { url: "/mudda-logo.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/mudda-logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/mudda-logo.png",
      },
    ],
  },
  openGraph: {
    title: "Mudda - AI Customer Service Chatbot | E-commerce Automation",
    description:
      "Install AI customer service chatbot in 5 minutes. 24/7 automated support, product recommendations, order inquiries. Boost customer satisfaction and reduce costs by 80%.",
    url: "https://www.mudda.co.kr",
    siteName: "Mudda",
    images: [
      {
        url: "https://www.mudda.co.kr/mudda-logo.png",
        width: 1200,
        height: 630,
        alt: "Mudda - AI Customer Service Chatbot",
        type: "image/png",
      },
      {
        url: "https://www.mudda.co.kr/mudda-logo.png",
        width: 800,
        height: 400,
        alt: "Mudda Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudda - AI Customer Service Chatbot | E-commerce Automation",
    description:
      "Install AI chatbot in 5 minutes. 24/7 automated support, reduce costs by 80%.",
    images: ["https://www.mudda.co.kr/mudda-logo.png"],
    creator: "@mudda_official",
    site: "@mudda_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "naver-site-verification": "your-naver-verification-code",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD 구조화 데이터 - 영어 */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Mudda",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "127",
              },
              description:
                "AI customer service chatbot. Install in 5 minutes for 24/7 automated customer support in your e-commerce store.",
            }),
          }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mudda",
              url: "https://www.mudda.co.kr",
              description: "AI Customer Service Chatbot Solution",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.mudda.co.kr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              inLanguage: ["en-US", "ko-KR"],
            }),
          }}
        />
        {/* 카카오톡 미리보기 최적화 - 기존 mudda 방식 적용 */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mudda" />
        <meta
          property="og:title"
          content="Mudda - AI Customer Service Chatbot"
        />
        <meta
          property="og:description"
          content="Install AI customer service chatbot in 5 minutes. 24/7 automated support, reduce costs by 80%."
        />
        <meta property="og:url" content="https://www.mudda.co.kr/" />
        <meta
          property="og:image"
          content="https://www.mudda.co.kr/mudda-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Mudda - AI Customer Service Chatbot"
        />

        {/* 추가 SNS 메타태그 */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* 트위터 카드도 직접 추가 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mudda - AI Customer Service Chatbot"
        />
        <meta
          name="twitter:description"
          content="Install AI chatbot in 5 minutes. 24/7 automated support, reduce costs by 80%."
        />
        <meta
          name="twitter:image"
          content="https://www.mudda.co.kr/mudda-logo.png"
        />
        <meta name="twitter:site" content="@mudda_official" />
        <meta name="twitter:creator" content="@mudda_official" />

        <Script
          id="dark-mode-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // 서버와 클라이언트 간 hydration mismatch 방지
                  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  const isDark = mediaQuery.matches;
                  
                  // 즉시 적용
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  
                  // 시스템 설정 변경 감지
                  mediaQuery.addEventListener('change', function(e) {
                    if (e.matches) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  });
                } catch (e) {
                  console.log('Dark mode detection failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
