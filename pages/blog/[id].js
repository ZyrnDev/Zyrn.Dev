import { getAllPostIds, getPostData } from '../../lib/posts';
import Post from '../../components/post';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Render({ postData }) {
  return (<Post postData={postData}></Post>)
}