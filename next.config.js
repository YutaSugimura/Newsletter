/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_MOCKING: process.env.NODE_ENV === 'development' ? 'enabled' : 'disabled',
  },
};
