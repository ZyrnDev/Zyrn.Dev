import { FC } from 'react';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import Date from './date';
import Layout from './layout';
import utilStyles from '@styles/utils.module.css';
import { PostMetaData } from "@lib/posts"

export const BlogPostListEntry: FC<{ post: PostMetaData, isUnreleased?: boolean }> = ({ post: { id, date, title }, isUnreleased = false }) => {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={!isUnreleased ? "/blog/[id]" : "/blog/unreleased/[id]"} as={!isUnreleased ? `/blog/${id}` : `/blog/unreleased/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  )
};

export const BlogPostList: FC<{ posts: PostMetaData[], style: React.CSSProperties, isUnreleased?: boolean, isRecent?: boolean }> = ({ posts, style, isUnreleased = false, isRecent = false }) => {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} style={style}>
      <h2 className={utilStyles.headingLg}>{isRecent ? "Recent Blog Posts" : "All Blog Posts"}</h2>
      <ul className={utilStyles.list}>
        {posts.map((post) => (
          <BlogPostListEntry post={post} isUnreleased={isUnreleased} key={post.id}/>
        ))}
      </ul>
      {isRecent && (
        <Link href="/blog/"><a><small>See all posts</small></a></Link>
      )}
    </section>
  )
};


const meta = {
  title: "Mitchell 'Zyrn' Lee's Blog",
  description: "A place where Mitchell 'Zyrn' Lee talks about his recent projects."
};

const Posts: FC<{ posts: PostMetaData[], isUnreleased?: boolean }> = ({ posts, isUnreleased = false }) => {
  const shouldBe2Cols = useMediaQuery({ minWidth: '40rem' });
  return (
    <Layout title="Blog | Zyrn.Dev" meta={meta}>
        {shouldBe2Cols ? (
          <div className={utilStyles.flexGrid}>
            <BlogPostList posts={posts} isUnreleased={isUnreleased} style={{ maxWidth: "20rem" , padding: '0.5rem' }} />
            <section className={`${utilStyles.headingMd} ${utilStyles.flexColumn} ${utilStyles.sticky}`} style={{ maxWidth: "20rem" , padding: '0.5rem' }}>
              <h2 className={utilStyles.headingLg}>About Me</h2>
              <p>My name is Mitchell 'Zyrn' Lee and I am a 3rd year software engineering student. I'm passionate about building software and have been doing just that for over a decade.</p>
            </section>
          </div>
        ) : (
          <BlogPostList posts={posts} isUnreleased={isUnreleased} style={{ maxWidth: "20rem", margin: "auto" }} />
        )} 
      </Layout>
    )
}
export default Posts;