import Layout from "../components/layout";
import Upload from "../components/file_upload";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Head from "next/head";

export default function Files() {
  return (

    <Layout>
      <Head>
          <title>Files | Zyrn.Dev</title>
      </Head>
      <h1 className={utilStyles.heading2X1}>Files</h1>
      <Upload/>
      <Link href="/uploads">
        <a>View Uploads</a>
      </Link>
    </Layout>
  );
};