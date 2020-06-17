import Layout from "../../components/layout";
import Upload from "../../components/file_upload";
import Link from "next/link";

export default function Test() {
  return (
    <>
    <Layout>
        <Upload/>
      <Link href="/uploads">
        <a>Uploaded Files</a>
      </Link>
    </Layout>
    </>
  );
};