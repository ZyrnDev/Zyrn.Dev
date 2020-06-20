import Layout from "../components/layout";
import File from "../components/file";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Head from "next/head";
import fs from "fs";

export async function getServerSideProps(context) {
  let files = await getFiles("./public/uploads");
  files = JSON.parse(JSON.stringify(files));
  return {
    props: {
      files
    }
  }
}

async function getFiles(directory) {
  let filenames = await fs.promises.readdir(directory);
  filenames = filenames.filter(name => name !== '.gitkeep');
  let files = filenames.map((filename) => ({ name: filename }));

  for (let i = 0; i < files.length; i++) {
    let fileStats = await fs.promises.lstat(directory + "/" + files[i].name);
    fileStats.name = files[i].name;
    files[i] = fileStats;
  }

  return files;
}

export default function Uploads({ files }) {
  return (
    <Layout>
      <Head>
          <title>Uploads | Zyrn.Dev</title>
      </Head>
      <h1 className={utilStyles.heading2X1}>Uploads</h1>
      {files.map((file) => (
        <File file={file}/>
      ))}
      
      <div>
        <Link href="/files">
          <a>← Back to files</a>
        </Link>
      </div>
      
    </Layout>
  );
};