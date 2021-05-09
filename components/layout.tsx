import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '@styles/utils.module.css';
import Menu from '@components/menu';
import Meta, { MetaOptions } from "@components/meta";

export const name = 'Mitchell Lee'
export const siteTitle = 'Mitchell Lee | Zyrn.Dev'

const Layout: FC<{ title?: string, meta?: MetaOptions, home?: boolean, style?: React.CSSProperties, className?: string }> = ({ children, title = siteTitle, meta, home, style = { maxWidth: "36rem" }, className = "" }) => {
  return (<>
    <Menu/>
    <div className={`${styles.container} ${className}`} style={style}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        { title && (<title>{ title }</title>) }
      </Head>
      <Meta options={meta} />
      <header className={styles.header}>
        {home && (<>
          <Image src="/images/me.webp" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name} priority={true} quality={"100%"} width={144} height={144}/>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>)}
      </header>
      <main>{children}</main>
    </div>
  </>);
}

export default Layout;