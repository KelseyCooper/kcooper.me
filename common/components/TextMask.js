import { useRef } from 'react'
import cx from 'classnames'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { Section } from 'common/components'
import useRefScrollProgress from 'common/hooks/useRefScrollProgress'

import styles from './TextMask.module.css'

const content = [
  'Hello & welcome,',
  'my name is Kelsey Cooper.',
  "I'm I web developer from",
  'Victoria, Canada.',
]

const TextMask = ({ id, setInViewSection }) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className={cx(styles.container, 'section')}>
        {content.map((text, i) => (
          <TextMaskItem text={text} key={`text-fill--${i}`} />
        ))}
      </div>
    </Section>
  )
}

const TextMaskItem = ({ text }) => {
  const ref = useRef()
  const { start, end } = useRefScrollProgress(ref, { offset: -200 })
  const { scrollYProgress } = useViewportScroll()
  const width = useTransform(scrollYProgress, [start, end], [100, 0])
  const widthPercent = useTransform(width, value => `${value}%`)

  return (
    <div className={cx(styles.item)} ref={ref}>
      <h4 className={cx(styles.text, 'font-heading')}>{text}</h4>
      <motion.div
        className={cx(styles.mask)}
        style={{
          width: widthPercent,
        }}
      />
    </div>
  )
}

export default TextMask
