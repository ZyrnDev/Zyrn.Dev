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
  const firstPosts = allPostsData.slice(0, 3);
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
    <Layout meta={meta} style={{maxWidth: "50rem",  marginTop: "0"}}>
      <section className="section center" style={{ paddingBottom: "0em"}}>
        <Image src="/images/me.webp" className={utilStyles.borderCircle} alt={name} priority={true} quality={"100%"} width={144} height={144}/>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <p className={utilStyles.headingMd} style={{ marginTop: "0" }}>My name is Mitchell 'Zyrn' Lee and I am a 3rd year software engineering student. I'm passionate about building software and have been doing just that for over a decade.</p>
        <p className={utilStyles.headingMd} style={{ marginTop: "0" }}>My main areas of include: low level systems programming, development operations, robust and scalable web applications as well as building simple, easy to use abstractions.</p>
      </section>
      <BlogPostList posts={firstPosts} style={{}} isRecent={true}/>
    </Layout>
  )
};

export default Home;