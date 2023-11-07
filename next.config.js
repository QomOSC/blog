const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  reactStrictMode: true,
}

module.exports = withContentlayer(nextConfig)
