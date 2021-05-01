import Head from 'next/head';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import Date from './date';
import Layout from './layout';
import utilStyles from '../styles/utils.module.css';
import { PostMetaData } from "../lib/posts"

function BlogPosts({
  allPostsData,
  style,
  isUnreleased = false
}: {
  allPostsData: PostMetaData[],
  style: React.CSSProperties,
  isUnreleased?: boolean,
}) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} style={style}>
      <h2 className={utilStyles.headingLg}>All Blog Posts</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <>
          <li className={utilStyles.listItem} key={id}>
            <Link href={!isUnreleased ? "/blog/[id]" : "/blog/unreleased/[id]"} as={!isUnreleased ? `/blog/${id}` : `/blog/unreleased/${id}`}>
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
    
export default function Posts({
  allPostsData,
  isUnreleased = false
}: {
  allPostsData: PostMetaData[],
  isUnreleased?: boolean,
}) {
    let meta = {
        title: "Mitchell 'Zyrn' Lee's Blog",
        description: "A place where Mitchell 'Zyrn' Lee talks about his recent projects.",
        //image: "/images/pfp.webp",
    };
    const shouldBe2Cols = useMediaQuery({ minWidth: '40rem' });
    return (
      <Layout meta={meta} /* style={{ maxWidth: '42rem' }} */>
        <Head>
          <title>Blog | Zyrn.Dev</title>
        </Head>
        {shouldBe2Cols ? (
          <div className={utilStyles.flexGrid}>
            <BlogPosts allPostsData={allPostsData} isUnreleased={isUnreleased} style={{ maxWidth: "20rem" , padding: '0.5rem' }} />
            <section className={`${utilStyles.headingMd} ${utilStyles.flexColumn} ${utilStyles.sticky}`} style={{ maxWidth: "20rem" , padding: '0.5rem' }}>
              <h2 className={utilStyles.headingLg}>About Me</h2>
              <p>My name is Mitchell 'Zyrn' Lee and I am a 3rd year software engineering student. I'm passionate about building software and have been doing just that for over a decade.</p>
            </section>
          </div>
        ) : (
          <BlogPosts allPostsData={allPostsData} isUnreleased={isUnreleased} style={{ maxWidth: "20rem", margin: "auto" }} />
        )} 
      </Layout>
    )
  }