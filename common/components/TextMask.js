import { useRef, useEffect } from 'react'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  useElementScroll,
  useViewportScroll,
} from 'framer-motion'

import { Section } from 'common/components'
import useRefScrollProgress from 'common/hooks/useRefScrollProgress'

import styles from './TextMask.module.css'

const content = [
  'I come from a land',
  'Where beer does flow',
  'Cant you hear, cant ',
  'You better run, you',
  'better take cover.',
]

const TextMask = ({ id, setInViewSection }) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className="section">
        {content.map((text, i) => (
          <TextMaskItem text={text} key={`text-fill--${i}`} />
        ))}
      </div>
    </Section>
  )
}

const TextMaskItem = ({ text }) => {
  const ref = useRef()
  const { start, end } = useRefScrollProgress(ref, { offset: 300 })
  const { scrollYProgress } = useViewportScroll()
  const width = useTransform(scrollYProgress, [start, end], [100, 0])
  const widthPercent = useTransform(width, value => `${value}%`)

  return (
    <div className={cx(styles.item)} ref={ref}>
      <span className={cx(styles.text, 'font-heading')}>{text}</span>
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
