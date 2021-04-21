import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Menu from '../components/menu';
import { max } from 'date-fns';

export const name = 'Mitchell Lee'
export const siteTitle = 'Mitchell Lee | Zyrn.Dev'

export default function Layout({ children, meta, home, maxWidth = '36rem' }) {
  return (
    <>
      <Menu/>
      <div className={`${styles.container}`} style={{ maxWidth: maxWidth }}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          { meta?.title && (<meta name="og:title" content={ meta.title } />) }
          { meta?.description && (<meta name="description" content={ meta.description } />) }
          { meta?.image && (<meta property="og:image" content={ meta.image } />) }
          { meta && (<meta name="twitter:card" content="summary_large_image" />) }
        </Head>
        <header className={styles.header}>
          {home && (
            <>
              <img
                src="/images/me.png"
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