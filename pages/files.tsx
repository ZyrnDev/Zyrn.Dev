import { FC } from "react";
import Layout from "@components/layout";
import Upload from "@components/file_upload";
import utilStyles from '@styles/utils.module.css';
import Link from "next/link";
import Head from "next/head";

const meta = {
  title: "Mitchell 'Zyrn' Lee's File Server",
  description: "A place where you can download files from your friends and family.",
  //image: "/images/pfp.webp",
};

const Files: FC = () => {
  return (
    <Layout meta={meta}>
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
export default Files;