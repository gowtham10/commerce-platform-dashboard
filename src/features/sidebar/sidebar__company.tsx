import styles from "./sidebar.module.scss";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

export function Company() {
  return (
    <section className={styles["sidebar__company"]}>
      <h2 className={styles["sidebar__company-header"]}>
        <CubeTransparentIcon className={styles["sidebar__company-logo"]} width={40} height={40} />
        <span className={styles["sidebar__company-name"]}>Anchor</span>
      </h2>
    </section>
  );
}
