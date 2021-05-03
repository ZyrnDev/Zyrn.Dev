import { GetStaticProps } from 'next'
import Posts from '@components/posts';
import { getSortedPostsData, PostMetaData } from '@lib/posts';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }: { allPostsData: PostMetaData[] }) {
  return (<Posts allPostsData={allPostsData}></Posts>)
}