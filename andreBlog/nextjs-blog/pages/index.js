import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'


export default function Home({allPostsData}) {
  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
    <p>[Hi, I'm {'Andre'}. I'm a software Developer just embracing the chaos]</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '})
        </p>
      </section>
      

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
            </li>
            ))}
            </ul>
            </section>

            <Link href="/posts/first-post">
          <a>Here goes nothing</a>
          </Link>
          </Layout>
          )
        }
        
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}