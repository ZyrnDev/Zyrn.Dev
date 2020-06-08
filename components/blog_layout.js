import styles from './blog_layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Menu from '../components/menu';

const name = 'Mitchell Lee'
export const siteTitle = 'Zyrn.Dev | Mitchell Lee'

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
          {home ? (
            <>
              <img
                src="/images/pfp.png"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/blog">
                <a>
                  <img
                    src="/images/pfp.png"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/blog">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/blog">
              <a>← Back to blog</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}