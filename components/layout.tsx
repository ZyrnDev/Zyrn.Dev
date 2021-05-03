import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '@styles/utils.module.css';
import Menu from '@components/menu';

export const name = 'Mitchell Lee'
export const siteTitle = 'Mitchell Lee | Zyrn.Dev'

export interface MetaData {
  title?: string,
  description?: string,
  image?: string,
}

export default function Layout({
  children,
  meta,
  home,
  style = { maxWidth: "36rem" },
  className = ""
}: {
  children: React.ReactNode
  meta?: MetaData
  home?: boolean
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <>
      <Menu/>
      <div className={`${styles.container} ${className}`} style={style}>
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
              <Image
                src="/images/me.webp"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
                priority={true}
                width={144}
                height={144}
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
