/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/json/:path*',
        destination: 'https://jsonplaceholder.typicode.com/:path*'
      },
      {
        source: '/b/:path*',
        destination: 'https://vercel-broken-rewrites-demo-app-b.vercel.app/b/:path*'
      },
      {
        source: '/the-file',
        destination: 'https://vercel-broken-rewrites-demo-app-b.vercel.app/app-b-file.txt'
      }
    ]
  }
}

module.exports = nextConfig
