import Head from 'next/head'

import {
  RotatingText,
  Introduction,
  Text,
  Header,
  TextMask,
  Slideshow,
  Contact,
} from 'common/components'

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
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RotatingText />
      <TextMask />
      <Introduction />
      <Slideshow />
      <Text heading={textContent[0].heading} content={textContent[0].content} />
      <Text
        heading={textContent[1].heading}
        headingAlignment={textContent[1].headingAlignment}
        content={textContent[1].content}
        path={textContent[1].path}
        label={textContent[1].label}
      />
      <Contact />
    </div>
  )
}
