import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

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
      <section className={utilStyles.headingMd}>
        <p>Hi my name is Derrick Xu. A software engineer based out of NYC!</p>
        <p> I am interested in topics of data modeling, NLP and of software engineering. Sometimes also entrepruner at heart. </p>
        <p> This is my personal home page to record my thoughts, work and interests! which will COME OUT SOON</p>
        <p>I also love to provide career advice to people who are interested in Tech!</p>
        <p> I am happy to chat and connect</p>
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
