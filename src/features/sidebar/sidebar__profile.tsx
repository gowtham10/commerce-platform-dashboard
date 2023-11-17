import styles from "./sidebar.module.scss";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export function Profile() {
  return (
    <section className={styles["sidebar__profile"]}>
      <UserCircleIcon width={30} height={30} />
      <span>John Doe</span>
    </section>
  );
}
