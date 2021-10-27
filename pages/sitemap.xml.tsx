import { GetServerSideProps } from 'next';
import { getSiteMap } from '@lib/sitemap';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteMap = await getSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(siteMap);
  res.end();
  return { props: {} };
}

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-module-boundary-types
export default function Sitemap() {}

