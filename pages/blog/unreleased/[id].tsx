import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Post from '../../../components/post';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string, true)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds(true)
  return {
    paths,
    fallback: false
  }
}

export default function Render({ postData }) {
  return (<Post postData={postData} isUnreleased={true}></Post>)
}