import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from './styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
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
    </Layout>
  )
}