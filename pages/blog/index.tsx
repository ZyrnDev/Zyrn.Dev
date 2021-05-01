import { GetStaticProps } from 'next'
import Posts from '../../components/posts';
import { getSortedPostsData } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (<Posts allPostsData={allPostsData}></Posts>)
}