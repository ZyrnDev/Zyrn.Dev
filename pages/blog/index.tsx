import { FC } from 'react';
import { GetStaticProps } from 'next'
import Posts from '@components/posts';
import { getSortedPostsData, PostMetaData } from '@lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Blog: FC<{ allPostsData: PostMetaData[] }> = ({ allPostsData }) => {
  return (<Posts posts={allPostsData}></Posts>)
}

export default Blog;