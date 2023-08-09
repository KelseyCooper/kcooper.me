import Head from 'next/head'

import { RotatingText, Header } from 'common/components'

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RotatingText />
    </div>
  )
}
