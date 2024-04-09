 /**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}
 
module.exports = nextConfig
  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.fakercloud.com', 
          hostname: 'cloudflare-ipfs.com',
          
        },
      ],
    },
  }
