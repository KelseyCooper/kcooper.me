import Image from 'next/image'
import { Section } from 'common/components'
import styles from './Introduction.module.css'

import ImageBlurData from 'common/utils/ImageBlurData'

import cx from 'classnames'

const Introduction = ({ id, setInViewSection }) => {
  return (
    <Section id={id} setInViewSection={setInViewSection}>
      <div className={cx(styles.container, 'section')}>
        <div className={cx(styles.image)}>
          <Image
            src="https://www.fillmurray.com/1600/900"
            layout="fill"
            placeholder="blur"
            blurDataURL={ImageBlurData}
            alt="Hero"
          />
        </div>
        <div className={cx(styles.text)}>
          <h2>Kelsey Cooper</h2>
          <p>
            I'm baby organic hella lo-fi pok pok prism hell of disrupt franzen
            lyft deep v tousled 90's portland shaman. IPhone man braid retro
            direct trade activated charcoal portland godard. Poke hot chicken
            hella subway tile fanny pack pork belly intelligentsia aesthetic
            vape austin 8-bit quinoa hoodie thundercats etsy. Vexillologist
            normcore kombucha cold-pressed +1 etsy gochujang man braid hoodie
            pickled.
          </p>
          <p>
            Plaid affogato letterpress, actually polaroid forage quinoa tousled.
            Put a bird on it helvetica listicle aesthetic venmo, franzen tousled
            before they sold out adaptogen tote bag cloud bread dreamcatcher
            microdosing 90's neutra. Bitters forage small batch kinfolk brunch.
            Skateboard drinking vinegar deep v af.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Introduction
