/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 파일 최적화
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // 이미지 최적화
  images: {
    domains: [],
  },

  // 웹팩 설정
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },

  // 정적 파일 처리
  async rewrites() {
    return [];
  },

  // 헤더 설정
  async headers() {
    return [
      {
        source: "/logo.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Content-Type",
            value: "image/png",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
