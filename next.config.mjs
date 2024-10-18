/** @type {import('next').NextConfig} */
const nextConfig = {
    // Webpack configuration
    webpack: (config) => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding');
      return config;
    },
  
    // Headers configuration
    async headers() {
      return [
        {
          source: "/.well-known/xrp-ledger.toml",
          headers: [
            {
              key: "Content-Type",
              value: "text/plain",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  