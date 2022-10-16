/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
/*   redirects: async () => {
    return [{
      source: '/:path',
      destination: '/',
      permanent: true
    }]
  } */
}

module.exports = nextConfig
