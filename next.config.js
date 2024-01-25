/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'todolistzee3.netlify.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'too.netlify.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'facebook-ui-zee.vercel.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'google-file.vercel.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'utube-next.vercel.app',
        port: '',
      },
    ],
  },
}