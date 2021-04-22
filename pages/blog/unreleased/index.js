import Posts from '../../../components/posts';
import { getSortedPostsData } from '../../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(true)
  return {
    props: {
      allPostsData
    }
  }
}


export default function Blog({ allPostsData }) {
  return (<Posts allPostsData={allPostsData} isUnreleased={true}></Posts>)
}