import Head from 'next/head';
import Link from 'next/link';
import Layout, { name } from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import layoutStyles from '../../components/layout.module.css';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <header className={layoutStyles.header}>
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
      </header>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <div>
        <Link href="/blog">
          <a>← Back to blog</a>
        </Link>
      </div>
    </Layout>
  )
}