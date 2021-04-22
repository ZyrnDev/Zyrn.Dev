import Head from 'next/head';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import Layout from './layout';
import Date from './date';
import styles from "./post.module.css";
import utilStyles from '../styles/utils.module.css';

export default function Post({ postData, isUnreleased = false }) {
  let meta = {
    title: postData.title,
    description: "An article about my projects working called '" + postData.title + "'.",
    //image: "/images/pfp.webp",
  };

  return (
    <Layout meta={meta} style={{}} className={styles.body}>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {/* <header className={layoutStyles.header}>
        <Link href="/blog">
          <a>
            <img
              src="/images/pfp.webp"
              className={`${layoutStyles.headerImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/blog">
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      </header> */}

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <div>
        <Link href={!isUnreleased ? "/blog" :"/blog/unreleased"}>
          <a>← Back to blog</a>
        </Link>
      </div>
    </Layout>
  )
}