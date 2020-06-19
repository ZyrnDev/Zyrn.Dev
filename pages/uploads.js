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
              <a href={`https://cdn.zyrn.dev/uploads/${name}`}>{name}</a>
          </div>
          ))}
    </Layout>
    </>
  );
};