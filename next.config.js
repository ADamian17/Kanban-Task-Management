/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: ["styles"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
