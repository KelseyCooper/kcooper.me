import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import cx from 'classnames'

import styles from './SocialView.module.css'

const socialContent = {
  heading: 'Follow us on instagram',
  handle: '@annellensound',
  link: 'https://www.instagram.com/anneellensound/?hl=en',
}

const variants = {
  grid: {
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    hidden: {},
  },
  item: {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 10,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
}

function getSocialCaption(captionNode, currentIndex) {
  let socialCaption = `Instagram post ${currentIndex + 1}`

  if (captionNode.edges.length) {
    socialCaption = captionNode.edges[0].node.text
      .replace(/(#\w+)+/g, '')
      .trim()
  }

  return socialCaption
}

const SocialView = ({ posts }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section">
      <div className={cx(styles.container)}>
        <h2 className="h-mini">
          {socialContent.heading}
          <Link href={socialContent.link}>
            <a>
              <strong>{socialContent.handle}</strong>
            </a>
          </Link>
        </h2>
        <div ref={ref}>
          <SocialGrid posts={posts} inView={inView} />
        </div>
      </div>
    </section>
  )
}

const SocialGrid = ({ inView, posts }) => {
  return (
    <motion.ul
      className={cx(styles.grid, 'list-reset')}
      initial={false}
      animate={inView ? 'visible' : 'hidden'}
      variants={variants.grid}
    >
      {posts.map((post, i) => (
        <SocialItem post={post} index={i} key={`social-item-${i}`} />
      ))}
    </motion.ul>
  )
}

const SocialItem = ({ post, index }) => {
  return (
    <motion.li key={index} className={cx(styles.item)} variants={variants.item}>
      <Link
        href={`https://www.instagram.com/p/${post.node.shortcode}`}
        aria-label="View image on Instagram"
      >
        <a className={cx(styles.itemLink)}>
          <motion.img
            src={post.node.thumbnail_src}
            alt={getSocialCaption(post.node.edge_media_to_caption, index)}
            className={cx(styles.itemImage)}
            whileHover={{
              scale: 1.2,
              transition: { duration: 3, ease: 'linear' },
            }}
          />
        </a>
      </Link>
    </motion.li>
  )
}

SocialView.propTypes = {
  posts: PropTypes.array.isRequired,
}

SocialGrid.propTypes = {
  posts: PropTypes.array.isRequired,
  inView: PropTypes.bool.isRequired,
}

SocialItem.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default SocialView
