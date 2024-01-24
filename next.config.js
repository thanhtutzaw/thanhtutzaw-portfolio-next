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
    domains: ['raw.githubusercontent.com', 'todolistzee3.netlify.app', 'too.netlify.app', 'facebook-ui-zee.vercel.app', 'google-file.vercel.app', "utube-next.vercel.app"],
  },
}