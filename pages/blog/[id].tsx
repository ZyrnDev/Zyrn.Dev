import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next'
import Post from '../../components/post';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Render({ postData }) {
  return (<Post postData={postData}></Post>)
}