module.exports = {
  reactStrictMode: false,
};

const withImages = require("next-images");
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://strapi.neointeraction.com/:path*",
      },
    ];
  },
});
