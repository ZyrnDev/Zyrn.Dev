import { FC } from 'react';
import { GetStaticProps } from 'next';
import Layout from '@components/layout';
import Image from 'next/image';
import utilStyles from '@styles/utils.module.css';
import { getSortedPostsData, PostMetaData } from '@lib/posts';
import { BlogPostList } from '@components/posts';

export const name = 'Mitchell Lee'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const firstPosts = allPostsData.slice(0, 5);
  return {
    props: {
      firstPosts
    }
  }
}

const meta = {
  title: "Mitchell 'Zyrn' Lee's Home",
  description: "The home for Mitchell 'Zyrn' Lee. A passionate software developer with over a decade of experience.",
  //image: "/images/pfp.webp",
};

const Home: FC<{ firstPosts: PostMetaData[] }> = ({ firstPosts }) => {
  return (
    <Layout meta={meta} style={{maxWidth: "40rem"}}>
      <section className="section">
        <Image src="/images/me.webp" className={utilStyles.borderCircle} alt={name} priority={true} quality={"100%"} width={144} height={144}/>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <p className={utilStyles.headingMd}>My name is Mitchell 'Zyrn' Lee and I am a 3rd year software engineering student. I'm passionate about building software and have been doing just that for over a decade.</p>
      </section>
      <BlogPostList posts={firstPosts} style={{}} isRecent={true}/>
    </Layout>
  )
};

export default Home;