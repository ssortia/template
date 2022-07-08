const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['next-auth']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: ['localhost', '127.0.0.1']
  },
  webpack5: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
