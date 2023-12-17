/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: ["styles"],
  },
};

module.exports = nextConfig;
