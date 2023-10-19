/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DataLink Technologies',
    description: 'Workspaces For DataLink LTD.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/benleo/kasm-registry/',
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
