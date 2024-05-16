import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/app/components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link legacyBehavior href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
