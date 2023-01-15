// pages/server-sitemap.xml/index.tsx

import { baseUrl } from "globalConfig";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const response = await fetch(baseUrl + `/blogs`);
  const blogs = await response.json();

  const responseProject = await fetch(baseUrl + `/projects`);
  const projects = await responseProject.json();

  const fieldsBlog = blogs.map((blog) => ({
    loc: `https://www.neointeraction.com/blogs/${blog.blog_detail.SEOUrl.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    ).replace(/ /g, "-")}`,
    lastmod: new Date().toISOString(),
  }));

  const fieldsProject = projects.map((project) => ({
    loc: `https://www.neointeraction.com/projects/${project.project_detail.SEOUrl.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    ).replace(/ /g, "-")}`,
    lastmod: new Date().toISOString(),
  }));

  let combinedFeilds = [...fieldsBlog, ...fieldsProject];

  return getServerSideSitemap(ctx, combinedFeilds);
};

export default function Sitemap() {}
