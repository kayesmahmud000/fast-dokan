/** @type {import('next').NextConfig} */
const nextConfig = {
      experimental: {
    optimizeCss: false, // disables lightningcss and reverts to PostCSS
  },
};

export default nextConfig;
