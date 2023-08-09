import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'

import { Section } from 'common/components'

import styles from './RotatingText.module.css'

const headingArray = ['Developer', 'Creative', 'Maker']

const RotatingText = () => {
  return (
    <Section>
      <div className={cx(styles.container)}>
        <RotatingContent />
      </div>
    </Section>
  )
}

const RotatingContent = () => {
  const [headingIterator, setheadingIterator] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      headingIterator < headingArray.length - 1
        ? setheadingIterator(++headingIterator)
        : setheadingIterator(0)
    }, 3500)
  })
  return (
    <h2 className={cx(styles.heading)}>
      {headingArray[headingIterator].split('').map((char, i) => {
        return (
          <motion.span
            className={cx(styles.char)}
            key={`${headingArray[headingIterator]}--${char}--${i}`}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -35 }}
            transition={{ delay: 0.05 * i, ease: 'easeIn', duration: 0.5 }}
          >
            {char}
          </motion.span>
        )
      })}
    </h2>
  )
}

export default RotatingText
