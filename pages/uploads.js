import Layout from "../components/layout";
import Link from "next/link";
import fs from 'fs';

export async function getServerSideProps(context) {
  let data = await fs.promises.readdir("./public/uploads");
  return {
    props: {
      data
    }
  }
}

export default function Test({ data }) {
  return (
    <>
    <Layout>
      Uploads Page
      {data.map((name) => (
            <div key={name}>
              <Link href={`/uploads/${name}`}>
                <a>{name}</a>
              </Link>
          </div>
          ))}
    </Layout>
    </>
  );
};