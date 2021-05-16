import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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
      <h2>
        Blog
      </h2>
      <Link href="/posts/first-post">
          <a>Here goes nothing</a>
      </Link>
    </Layout>
  )
}