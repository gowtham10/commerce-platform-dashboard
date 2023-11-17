import styles from "./sidebar.module.scss";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

export function Company() {
  return (
    <section className={styles["sidebar__company"]}>
      <CubeTransparentIcon width={30} height={30} />
      <span>Anchor</span>
    </section>
  );
}
