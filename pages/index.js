import Head from 'next/head'

import { RotatingText, Introduction, Text, Header } from 'common/components'
import React, { useState } from 'react'

const textContent = [
  {
    heading:
      'Craft beer vice aesthetic post-ironic adaptogen before they sold out tousled bushwick',
    content:
      'Pop-up vexillologist sustainable marfa butcher, pok pok lyft. Art party quinoa listicle asymmetrical chillwave truffaut meh man bun lomo bitters cardigan neutra DIY adaptogen normcore. Actually hot chicken chartreuse yuccie try-hard street art tattooed.',
  },
  {
    heading: 'Adaptogen before they sold out tousled bushwick',
    headingAlignment: 'right',
    content:
      'Pop-up vexillologist sustainable marfa butcher, pok pok lyft. Art party quinoa listicle asymmetrical chillwave truffaut meh man bun lomo bitters cardigan neutra DIY adaptogen normcore. Actually hot chicken chartreuse yuccie try-hard street art tattooed.',
    path: '/KitchenSink',
    label: 'Join now',
  },
]

export default function Home() {
  const [inViewSection, setInViewSection] = useState('')

  return (
    <div>
      <Head>
        <title>Felucca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header inViewSection={inViewSection} />
      <RotatingText id="Home" setInViewSection={setInViewSection} />
      <Introduction id="About" setInViewSection={setInViewSection} />
      <Text
        heading={textContent[0].heading}
        content={textContent[0].content}
        id="Text"
        setInViewSection={setInViewSection}
      />
      <Text
        id="Banana"
        heading={textContent[1].heading}
        headingAlignment={textContent[1].headingAlignment}
        content={textContent[1].content}
        path={textContent[1].path}
        label={textContent[1].label}
        setInViewSection={setInViewSection}
      />
    </div>
  )
}
