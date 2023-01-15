/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.neointeraction.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml", "/BlogDetailPage", "/ProjectDetailPage"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.neointeraction.com/server-sitemap.xml", // <==== Add here
    ],
  },
};
