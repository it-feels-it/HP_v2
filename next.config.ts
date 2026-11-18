import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Cloudflare Workers の静的アセットとして配信するため、out/ に HTML を書き出す
  output: "export",
  // 静的書き出しでは Next.js の画像最適化サーバーが使えない
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
