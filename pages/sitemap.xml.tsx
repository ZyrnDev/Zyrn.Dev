import fs from "fs";
import { GetServerSideProps } from "next";

const baseUrl = {
  test: "http://localhost:3000",
  development: "http://localhost:3000",
  staging: "https://staging.zyrn.dev",
  production: "https://zyrn.dev",
}[process.env.NODE_ENV];

const createSiteMap = (staticPages: string[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;
}

const excludePagesFromSiteMap = (staticPage: string) => {
  if (staticPage.startsWith("_")) return false;
  return ![ "sitemap.xml.tsx", "files.tsx", "uploads.tsx" ].includes(staticPage);
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPages = fs.readdirSync("pages")
    .filter(excludePagesFromSiteMap)
    .map((staticPagePath) => staticPagePath.replace(".tsx", ""))
    .map((staticPagePath) => `${baseUrl}/${staticPagePath}`);
  
  const sitemap = createSiteMap(staticPages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: { "stop": "linting errors" }};
};

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-module-boundary-types
const Sitemap = () => {};

export default Sitemap;