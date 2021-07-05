import { FC } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import Menu from '@components/menu';
import Meta, { MetaOptions } from "@components/meta";

export const siteTitle = 'Mitchell Lee'

const Layout: FC<{ title?: string, meta?: MetaOptions, style?: React.CSSProperties, className?: string }> = ({ children, title = siteTitle, meta, style = { maxWidth: "42rem" }, className = "" }) => {
  return (<>
    <Menu/>
    <div className={`${styles.container} ${className}`} style={style}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        { title && (<title>{ title + ' | Zyrn' }</title>) }
      </Head>
      <Meta options={meta} />
      <main>{children}</main>
    </div>
  </>);
}

export default Layout;