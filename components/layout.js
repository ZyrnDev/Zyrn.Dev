import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Menu from '../components/menu';

export const name = 'Mitchell Lee'
export const siteTitle = 'Mitchell Lee | Zyrn.Dev'

export default function Layout({ children, home }) {
  return (
    <>
      <Menu/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Zyrn.Dev - we have file sharing, blog posts and more coming soon!"
          />
          <meta
            property="og:image"
            content="/images/pfp.png"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home && (
            <>
              <img
                src="/images/pfp.png"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          )}
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}