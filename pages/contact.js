import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact:</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            Email - <a href="mailto:mitch@zyrn.dev">mitch@zyrn.dev</a>
          </li>
          <li className={utilStyles.listItem}>
            Phone - <a href="tel:+61416684820">+61 416 684 820</a>
          </li>
          <li className={utilStyles.listItem}>
            Website - <Link href="/"><a>zyrn.dev</a></Link>
          </li>
          <li className={utilStyles.listItem}>
            Github - <a href="https://github.com/ZyrnDev/">github.com/ZyrnDev</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}