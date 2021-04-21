import Head from 'next/head';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import Layout, { name } from '../../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';
import layoutStyles from '../../../components/layout.module.css';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id, true);
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
    const paths = getAllPostIds(true)
    return {
      paths,
      fallback: false
    }
}

export default function Post({ postData }) {
  const shouldUse64rem = useMediaQuery({ minWidth: '76rem' });
  const shouldUse50rem = useMediaQuery({ minWidth: '62rem' });
  const shouldUse42rem = useMediaQuery({ minWidth: '50rem' });
  const shouldUse36rem = useMediaQuery({ minWidth: '44rem' });

  let meta = {
    title: postData.title,
    description: "An article about my projects working called '" + postData.title + "'.",
    //image: "/images/pfp.webp",
  };

  let width;
  if (shouldUse64rem) {
    width = "64rem"
  } else if (shouldUse50rem) {
    width = "50rem"
  } else if (shouldUse42rem) {
    width = "42rem"
  } else if (shouldUse36rem) {
    width = "36rem"
  } else {
    width = "30rem"
  }
  return (
    <Layout meta={meta} maxWidth={width}>
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
        <Link href="/blog">
          <a>← Back to blog</a>
        </Link>
      </div>
    </Layout>
  )
}