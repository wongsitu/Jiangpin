const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'es', 'cn'],
    defaultLocale: 'en',
  },
  images: {
    format: ['image/webp', 'image/png', 'image/jpeg'],
  },
};
