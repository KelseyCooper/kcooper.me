import cx from 'classnames'

import { Section, ContactForm } from 'common/components'

import styles from './Contact.module.css'

const Contact = ({ id, setInViewSection }) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className={cx(styles.container, 'section')}>
        <h2 className={cx(styles.heading)}>Want to get in touch?</h2>

        <ContactForm />
      </div>
    </Section>
  )
}

export default Contact
