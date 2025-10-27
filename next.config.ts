import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizePackageImports: [
      "@tabler/icons-react",
      "lucide-react",
      "date-fns",
      "@radix-ui",
      "lodash",
    ],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
    // Compression settings
  compress: true,
    
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/&",
        destination: "/en/",
        permanent: true,
      },
      {
        source: "/$",
        destination: "/en/",
        permanent: true,
      },
      {
        source: "/booking/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/en/insights",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/en/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/en/company/about",
        permanent: true,
      },
      {
        source: "/track-and-trace",
        destination: "/en/track-shipment",
        permanent: true,
      },
      {
        source: "/land-freight",
        destination: "/en/services/land-freight",
        permanent: true,
      },
      {
        source: "/air-freight",
        destination: "/en/services/air-freight",
        permanent: true,
      },
      {
        source: "/sea-freight",
        destination: "/en/services/sea-freight",
        permanent: true,
      },
      {
        source: "/project-forwarding",
        destination: "/en/services/project-cargo",
        permanent: true,
      },
      {
        source: "/exhibition-cargo",
        destination: "/en/services/exhibition-cargo",
        permanent: true,
      },
      {
        source: "/packing",
        destination: "/en/services/packing",
        permanent: true,
      },
      {
        source: "/service/packing",
        destination: "/en/services/packing",
        permanent: true,
      },
      {
        source: "/warehousing",
        destination: "/en/services/warehousing",
        permanent: true,
      },
      {
        source: "/logistics-truck",
        destination: "/en/services/movers-lashing",
        permanent: true,
      },
      
    ];
  },
};

const withNextIntl = createNextIntlPlugin({
  // experimental: {
  //   createMessagesDeclaration: './src/dictionaries/en.json'
  // }
});
export default withNextIntl(nextConfig);
