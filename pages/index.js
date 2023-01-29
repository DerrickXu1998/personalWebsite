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
        <NavBar marginTop={50} width={"100vw"} />
        <title>{siteTitle}</title>
      </Head>
      {/* <ThemeProvider theme={studioTheme}></ThemeProvider> */}
      <section className={utilStyles.headingMd}>
        <p>
          Hi my name is Derrick Xu. A passionate software engineer based out of
          NYC!
        </p>
        <p>
          {" "}
          I am interested in topics of data modeling, NLP and of software
          engineering.
        </p>
        <p>
          This is my personal home page to record my thoughts, work and
          interests!
        </p>
        <p>
          I also love to provide career advice to people who are interested in
          Tech!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section>

      {/* <section className={utilStyles.insideButton}>
        <div>
          <Footer />
        </div>
      </section> */}
    </Layout>
  );
}
