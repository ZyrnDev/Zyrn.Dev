import Head from 'next/head';
import Link from 'next/link';
import Date from '../../../components/date';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getSortedPostsData } from '../../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(true)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  let meta = {
    title: "Mitchell 'Zyrn' Lee's Blog",
    description: "A place where Mitchell 'Zyrn' Lee talks about his recent projects.",
    //image: "/images/pfp.webp",
  };
  return (
    <Layout meta={meta} home>
      <Head>
        <title>Blog | Zyrn.Dev</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>My name is Mitchell 'Zyrn' Lee and I am a 3rd year software engineering student. I'm passionate about building software and have been doing just that for over a decade.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>All Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/blog/unreleased/[id]" as={`/blog/unreleased/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}