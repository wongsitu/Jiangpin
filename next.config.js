const path = require('path');

/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL || '';

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    format: ['image/webp', 'image/png', 'image/jpeg'],
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*/',
        destination: `${API_URL}/api/:path*/`,
      },
    ];
  },
};
