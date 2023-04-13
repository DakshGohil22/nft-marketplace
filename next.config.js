/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["daksh-nft.infura-ipfs.io", "media.giphy.com", "infura-ipfs.io",],
  },
};


module.exports = nextConfig
