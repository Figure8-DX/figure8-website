import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    // Services renamed in 2026: keep old links and search rankings working.
    return [
      {
        source: "/services/total-quality-management",
        destination: "/services/organizational-excellence",
        permanent: true,
      },
      {
        source: "/services/ai-management-governance",
        destination: "/services/ai-transformation",
        permanent: true,
      },
      {
        source: "/services/digital-innovation-lab",
        destination: "/services/digital-product-innovation",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
