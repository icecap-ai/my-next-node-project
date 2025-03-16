// frontend/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: {
        loaders: {
          // Turbopack 끄고 webpack을 강제 사용
          'next-app-loader': false,
          'next-edge-ssr-loader': false,
          'next-edge-rsc-loader': false,
        }
      }
    },
    webpack: (config, { isServer }) => {
      config.watchOptions = {
        poll: 1000, // Docker 환경에서 파일 변경 감지 가능하게 설정
        aggregateTimeout: 300,
      };
  
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
  
      return config;
    }
  };
  
  export default nextConfig;
  