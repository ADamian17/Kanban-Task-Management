import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@use "abstracts" as *;\n`
  }
};

export default nextConfig;
