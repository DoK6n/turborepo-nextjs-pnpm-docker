/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   })
  //   return config
  // },
  output: 'standalone',
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  experimental: {
    esmExternals: true,
    swcTraceProfiling: true,
  },
}
