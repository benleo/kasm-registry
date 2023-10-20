/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DataLink Technologies',
    description: 'Workspaces For DataLink LTD.',
    icon: 'https://github.com/benleo/kasm-registry/blob/1.0/logo.png',
    listUrl: 'https://benleo.github.io/kasm-registry/1.0/',
    contactUrl: 'https://github.com/benleo/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
