/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/json/:path*',
        destination: 'https://jsonplaceholder.typicode.com/:path*'
      }
    ]
  }
}

module.exports = nextConfig
