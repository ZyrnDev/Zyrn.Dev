import { FC } from 'react';
import Link from 'next/link';
import Layout from '@components/layout';
import utilStyles from '@styles/utils.module.css';

const ContactLink: FC<{ name: string, uri: string, text: string, isExternal: boolean }> = ({ name, uri, text, isExternal = true}) => {
  return (
    <li className={utilStyles.listItem}>
      { name } - {isExternal ? (<a href={ uri }>{ text }</a>) : (<Link href={ uri }><a>{ text }</a></Link>) }
    </li>
  );
};

const contacts = [
  { name: "Email", uri: "mailto:mitch@zyrn.dev", text: "mitch@zyrn.dev", isExternal: true },
  { name: "Phone", uri: "tel:+61416684820", text: "+61 416 684 820", isExternal: true },
  // { name: "Website", uri: "/", text: "zyrn.dev", isExternal: false },
  { name: "Github", uri: "https://github.com/ZyrnDev/", text: "github.com/ZyrnDev", isExternal: true },
  { name: "Resume", uri: "/Mitchell_Lee_Resume.pdf", text: "pdf", isExternal: false },
  { name: "LinkedIn", uri: "https://www.linkedin.com/in/mitchell-lee-488570183/", text: "Mitchell Lee", isExternal: true },
];

const Contact: FC = () => {
  return (
    <Layout title="Contact | Zyrn.Dev" meta={{ title: "Contact Me", description: "How to contact me: Mitchell 'Zyrn' Lee" }}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact:</h2>
        <ul className={utilStyles.list}>
          {contacts.map(({name, uri, text, isExternal}) => (<ContactLink name={name} uri={uri} text={text} isExternal={isExternal} />) )}
        </ul>
      </section>
    </Layout>
  )
}
export default Contact;