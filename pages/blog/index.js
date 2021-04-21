import Head from 'next/head';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import Date from '../../components/date';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function BlogPosts({ allPostsData, style }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} style={style}>
      <h2 className={utilStyles.headingLg}>All Blog Posts</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <>
          <li className={utilStyles.listItem} key={id}>
            <Link href="/blog/[id]" as={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          </>
        ))}
      </ul>
    </section>
  )
}

function Columns({ allPostsData }) {
  const shouldBe2Cols = useMediaQuery({ minWidth: '40rem' });
  if (shouldBe2Cols) {
    return (
      <div className={utilStyles.flexGrid}>
          <BlogPosts allPostsData={allPostsData} style={{ maxWidth: "20rem" , padding: '0.5rem' }} />
          <section className={`${utilStyles.headingMd} ${utilStyles.flexColumn} ${utilStyles.sticky}`} style={{ maxWidth: "20rem" , padding: '0.5rem' }}>
            <h2 className={utilStyles.headingLg}>About Me</h2>
            <p>My name is Mitchell 'Zyrn' Lee and I am a 3rd year software engineering student. I'm passionate about building software and have been doing just that for over a decade.</p>
          </section>
      </div>
    );
  } else {
    return (
      <BlogPosts allPostsData={allPostsData} style={{ maxWidth: "20rem", margin: "auto" }} />
    );
  }
}

export default function Blog({ allPostsData }) {
  let meta = {
    title: "Mitchell 'Zyrn' Lee's Blog",
    description: "A place where Mitchell 'Zyrn' Lee talks about his recent projects.",
    //image: "/images/pfp.webp",
  };
  return (
    <Layout meta={meta} maxWidth='42rem'>
      <Head>
        <title>Blog | Zyrn.Dev</title>
      </Head>
      <Columns allPostsData={allPostsData}/>      
    </Layout>
  )
}