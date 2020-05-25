import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/blog_layout';

export default function FileServer() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
      </Layout>
    );
}