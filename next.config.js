/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.join(__dirname, 'src/*'),
      public: path.join(__dirname, 'public/*'),
    };
    return config;
  },
};

module.exports = nextConfig;
