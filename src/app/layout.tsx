import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shop Agent - Transform E-commerce Customer Experience with AI",
  description:
    "Easily add AI customer service to your e-commerce store for 24/7 automated support. Simple installation like Chatwoot, Gemini AI-powered smart support, and database integration to increase revenue.",
  keywords:
    "AI customer service, e-commerce support, chatbot, customer service, Gemini AI, e-commerce automation",
  authors: [{ name: "Shop Agent Team" }],
  creator: "Shop Agent",
  publisher: "Shop Agent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shopagent.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Shop Agent - Transform E-commerce Customer Experience with AI",
    description:
      "Easily add AI customer service to your e-commerce store for 24/7 automated support.",
    url: "https://shopagent.com",
    siteName: "Shop Agent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shop Agent - AI Customer Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Agent - Transform E-commerce Customer Experience with AI",
    description:
      "Easily add AI customer service to your e-commerce store for 24/7 automated support.",
    images: ["/og-image.png"],
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
