/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'production.listennotes.com',
      'a.ltrbxd.com',
      'webknox.com',
      'i.ytimg.com',
      'books.google.com',
      'i.scdn.co',
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })
    return config
  },
}

module.exports = nextConfig
