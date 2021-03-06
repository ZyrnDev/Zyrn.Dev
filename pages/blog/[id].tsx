import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData, PostData } from '@lib/posts';
import Post from '@components/post';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
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

const Render: FC<{ postData: PostData }> = ({ postData }) => {
  return <Post postData={postData} />
}
export default Render;