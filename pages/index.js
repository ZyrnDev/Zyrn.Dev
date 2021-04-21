import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const firstPosts = allPostsData.slice(0, 5);
  return {
    props: {
      firstPosts
    }
  }
}

export default function Home({ firstPosts }) {
  let meta = {
    title: "Mitchell 'Zyrn' Lee's Home",
    description: "The home for Mitchell 'Zyrn' Lee. A passionate software developer with over a decade of experience.",
    //image: "/images/pfp.webp",
  };
  return (
    <Layout meta={meta} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p style={{marginBottom: "0"}}>My name is Mitchell 'Zyrn' Lee and I am a 3rd year software engineering student. I'm passionate about building software and have been doing just that for over a decade.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Blog Posts</h2>
        <ul className={utilStyles.list}>
          {firstPosts.map(({ id, date, title }, index) => (
            <li className={utilStyles.listItem} style={(index == firstPosts.length-1) ? {margin: "0"} : {}}key={id}>
              <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          <li key="blog" style={{marginTop: "0.125rem"}}>
            <Link href="/blog/">
              <a><small>See all posts</small></a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}