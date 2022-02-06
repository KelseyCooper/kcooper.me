import React, { useState } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'

import themeColors from 'styles/themeColors'

import styles from './ColorThemeToggle.module.css'

const dotPosition = [
  {
    left: '3px',
  },
  {
    left: '16px',
  },
  {
    left: '28px',
  },
]

const ColorThemeToggle = () => {
  const [themeColorIndex, setHeaderthemeColorIndex] = useState(0)
  const themeColorsArray = Object.keys(themeColors)

  const handleClick = () => {
    const newIndex =
      themeColorIndex < themeColorsArray.length - 1 ? (themeColorIndex += 1) : 0
    setHeaderthemeColorIndex(newIndex)

    const themeColorKey = themeColorsArray[newIndex]
    document.documentElement.style.setProperty(
      '--color-text',
      themeColors[themeColorKey].text
    )
    document.documentElement.style.setProperty(
      '--color-text-light',
      themeColors[themeColorKey].textLight
    )
    document.documentElement.style.setProperty(
      '--color-background',
      themeColors[themeColorKey].background
    )
  }

  return (
    <button
      className={cx(styles.toggle)}
      onClick={handleClick}
      ariaLabel="Toggle site colors"
    >
      <motion.div
        className={cx(styles.toggleDot)}
        animate={dotPosition[themeColorIndex]}
        transition={{ ease: 'anticipate', duration: 0.5 }}
      ></motion.div>
    </button>
  )
}

export default ColorThemeToggle
