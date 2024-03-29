/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.neointeraction.com",
  generateRobotsTxt: true,
  exclude: ["/blog-sitemap.xml", "/BlogDetailPage", "/ProjectDetailPage"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.neointeraction.com/blog-sitemap.xml", // <==== Add here
    ],
  },
};
