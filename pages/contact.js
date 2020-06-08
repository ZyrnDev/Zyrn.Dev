import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact me via:</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            email - <a href="mailto:mitch@zyrn.dev">mitch@zyrn.dev</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}