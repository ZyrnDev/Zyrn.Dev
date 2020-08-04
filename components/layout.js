import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Menu from '../components/menu';

export const name = 'Mitchell Lee'
export const siteTitle = 'Mitchell Lee | Zyrn.Dev'

export default function Layout({ children, meta, home }) {
  meta = meta || {};
  return (
    <>
      <Menu/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:title" content={ meta.title || "Mitchell Lee | Zyrn.Dev" } />
          <meta name="description" content={ meta.description || "The home for Mitchell 'Zyrn' Lee. A passionate software developer." } />
          <meta property="og:image" content={ meta.image || "/images/pfp.webp" } />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home && (
            <>
              <img
                src="/images/pfp.webp"
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