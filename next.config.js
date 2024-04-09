 /**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}
 
module.exports = nextConfig
  module.exports = {
   reactStrictMode: false,
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = {fs: false};

      return config;
    },
   
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
