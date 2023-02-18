import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import Link from "next/link";
import Date from "../components/date";
import Footer from "../components/footer";

import { getSortedPostsData } from "../lib/posts";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

// import awsconfig from "../src/aws-exports.js";

import "@aws-amplify/ui-react/styles.css";
import { studioTheme, View, NavBar, HeroLayout1 } from "../src/ui-components";
<NavBar />;
// Amplify.configure(awsconfig);

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <ThemeProvider theme={studioTheme}></ThemeProvider> */}
      <section className={utilStyles.headingMd}>
        <p>Hello I am Derrick Xu!</p>
        <p> I am a software engineer based out of New York City.</p>
        <p>
          With an interdisciplinary background, I am passionate about
          integrating use of technology into our everyday lives.
        </p>
        <p>
          You can find me dabbling into the latest topic in machine learning.
        </p>
        <p>
          My area of interests specifically derive in the topics of natural
          language processing and finance.
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}

      {/* <section className={utilStyles.insideButton}>
        <div>
          <Footer />
        </div>
      </section> */}
    </Layout>
  );
}
