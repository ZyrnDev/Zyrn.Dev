import { FC } from 'react';
import Link from 'next/link';
import Layout from './layout';
import Date from './date';
import styles from "./post.module.css";
import utilStyles from '@styles/utils.module.css';

const Post: FC<{ postData: { title: string, date: string, contentHtml: string }, isUnreleased?: boolean }> = ({ postData, isUnreleased = false }) => {
  return (
    <Layout title={postData.title + " | Zyrn.Dev"} meta={{ title: postData.title, description: "An article about my projects working called '" + postData.title + "'." }} style={{}} className={styles.body}>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <div>
        <Link href={!isUnreleased ? "/blog" : "/blog/unreleased"}><a>← Back to blog</a></Link>
      </div>
    </Layout>
  )
};
export default Post;
