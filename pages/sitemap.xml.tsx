// const baseUrl = {
//   test: "http://localhost:3000",
//   development: "http://localhost:3000",
//   staging: "https://staging.zyrn.dev",
//   production: "https://zyrn.dev",
// }[process.env.NODE_ENV];

import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-module-boundary-types
export default function Sitemap() {}

type Url = {
  host: string;
  route: string;
  date?: Date;
};

const excludedRoutes: Array<RegExp> = [/\/index/, /\/404/, /\/sitemap.xml/, /\/api\/.*/, /\/(files)|(uploads)/, /\/blog\/unreleased.*/];
const excludeRoutes = ({ route }: Url) => {
  for (const expression of excludedRoutes) {
    if (expression.test(route)) {
      return false;
    }
  }
  return true;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const basePath: string = process.cwd();
  const pagesPath = path.join(basePath + '/.next/server/pages/');

  const routes_manifest: Record<string, unknown> | null = readManifestFile(basePath);
  // const host: string = baseUrl;

  let routes: Array<Url> = [];
  routes = [...routes, ...getPathsFromManifest(routes_manifest, "https://zyrn.dev")];
  routes = [...routes, ...getPathsFromManifest(routes_manifest, "https://www.zyrn.dev")];
  routes = [...routes, ...getPathsFromBuildFolder(pagesPath, [], "https://zyrn.dev", pagesPath)];
  routes = [...routes, ...getPathsFromBuildFolder(pagesPath, [], "https://www.zyrn.dev", pagesPath)];
  routes = routes.filter(excludeRoutes);

  const sitemap: string = getSitemapXml(routes);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
};

const readManifestFile = (basePath: string): Record<string, unknown> | null => {
  const routes_manifest_path = path.join(basePath + '/.next/server/pages-manifest.json');

  // Read from the file
  if (fs.existsSync(routes_manifest_path)) {
    const raw_json = fs.readFileSync(routes_manifest_path);
    return JSON.parse(raw_json.toString());
  } else return null;
};

const isNextInternalUrl = (path: string): boolean => {
  return new RegExp(/[^/]*^.[_]|(?:\[)/g).test(path);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPathsFromManifest = (manifest: any, host: string): Array<Url> => {
  const routes: Array<string> = Object.entries(manifest).filter(([route]) => !isNextInternalUrl(route)).map(([route]) => route);

  const sitemapUrls: Array<Url> = routes.map(route => { return { host: host, route: route } });

  return sitemapUrls;
};

const getPathsFromBuildFolder = (dir: string, urlList: Array<Url> = [], host: string, basePath: string): Array<Url> => {
  const files: string[] = fs.readdirSync(dir);

  files.forEach((file) => {
    // console.log(file)
    const stats = fs.statSync(dir + file);
    if (stats.isDirectory()) {
      urlList = getPathsFromBuildFolder(dir + file + '/', urlList, host, basePath);
    } else {
      if (path.extname(file) == '.json') {
        let route = path.join(dir + file.substring(0, file.length - 5));
        route = route.replace(basePath, '/').replace("\\", "/");
        urlList.push({ host: host, route: route, date: stats.mtime });
      }
    }
  });

  return urlList;
};

const getUrlElement = ({ host, route, date }: Url): string => {
  if (date) {
    return `
      <url>
        <loc>${host}${route}</loc>
        <lastmod>${date.toISOString()}</lastmod>
      </url>`;
  } else {
    return `
      <url>
        <loc>${host}${route}</loc>
      </url>`;
  }
};

const getSitemapXml = (urls: Array<Url>): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => getUrlElement(url)).join('')}
  </urlset>`;
}