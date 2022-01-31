import cx from 'classnames'

import { Section } from 'common/components'
import { TextLink } from 'common/components'

import styles from './Cards.module.css'

const cardsContent = [
  {
    icon: 'A',
    title: 'Card 1',
    content:
      'Everyday carry cloud bread post-ironic subway tile offal synth normcore master cleanse tbh enamel pin DIY. Quinoa edison bulb sriracha mumblecore',
    label: 'Read more',
    path: '/Contact',
  },
  {
    icon: 'B',
    title: 'Card 2',
    content:
      'Drinking vinegar squid mumblecore schlitz, normcore authentic poutine raclette mlkshk four dollar toast. Fanny pack retro street art gastropub.',
    label: 'Read more',
    path: '/Services',
  },
  {
    icon: 'C',
    title: 'Card 3',
    content:
      'Tofu freegan meditation man bun intelligentsia butcher humblebrag pabst kickstarter.',
    label: 'Read more',
    path: '/Contact',
  },
]

const Cards = ({ id, setInViewSection }) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className={cx(styles.container, 'section')}>
        {cardsContent.map(card => (
          <div className={cx(styles.card)} key={card.title}>
            <div className={cx(styles.icon, 'type-heading-1')}>{card.icon}</div>
            <h2 className={cx(styles.title)}>{card.title}</h2>
            <p className={cx(styles.content)}>{card.content}</p>
            <TextLink path={card.path} label={card.label} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Cards
