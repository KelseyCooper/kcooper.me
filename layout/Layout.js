import cx from "classnames";

import styles from "./Layout.module.css";
import { Header, Footer } from "common/components";

export default function Layout({ children }) {
  return (
    <div className={cx(styles.container)}>
      <Header />
      <main className={cx(styles.inner)}>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
