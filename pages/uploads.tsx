import Layout from "../components/layout";
import FileDisplay, { File } from "../components/file";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import { GetServerSideProps, GetServerSidePropsContext } from "next"

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const files = await getFiles("./public/uploads");
  
  return {
    props: {
      files
    }
  }
}

async function getFiles(directory: string): Promise<File[]> {
  const file_names = (await fs.promises.readdir(directory)).filter(name => name !== '.gitkeep');

  const files: Promise<File>[] = file_names.map(async (fileName): Promise<File> => {
    const fileStats = await fs.promises.lstat(directory + "/" + fileName);
    return {...fileStats, name: fileName};
  });

  return await Promise.all(files);
}

export default function Uploads({ files }: { files: File[]}) {
  let meta = {
    title: "Mitchell 'Zyrn' Lee's File Server",
    description: "A place where you can upload files to get around upload size restrictions.",
    //image: "/images/pfp.webp",
  };
  return (
    <Layout meta={meta}>
      <Head>
          <title>Uploads | Zyrn.Dev</title>
      </Head>
      <h1 className={utilStyles.heading2X1}>Uploads</h1>
      {files.map((file) => (
        <FileDisplay file={file}/>
      ))}
      
      <div>
        <Link href="/files">
          <a>← Back to files</a>
        </Link>
      </div>
      
    </Layout>
  );
};