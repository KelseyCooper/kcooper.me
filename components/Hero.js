import Image from "next/image";
import cx from "classnames";

import { Overlay } from "@/components";

import styles from "./Hero.module.css";

const heroContent = {
  heading:
    "Typewriter seitan shoreditch waistcoat paleo chambray. Drinking vinegar food truck jianbing, vape selfies snackwave crucifix",
};

const Hero = () => {
  return (
    <section className="section section--full-width">
      <div className={cx(styles.container)}>
        <Image
          src="https://www.fillmurray.com/2100/1800"
          layout="fill"
          alt="Logo"
        />
        <Overlay opacity={0.65} />

        <div className={cx(styles.inner)}>
          <h2 className={cx(styles.heading, "type-heading-1")}>
            {heroContent.heading}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
