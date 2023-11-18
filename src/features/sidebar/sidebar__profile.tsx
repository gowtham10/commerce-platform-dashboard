import styles from "./sidebar.module.scss";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export function Profile() {
  return (
    <section className={styles["sidebar__profile"]}>
      <div className={styles["sidebar__profile-container"]}>
        <UserCircleIcon width={35} height={35} />
        <span className={styles["sidebar__profile-name"]}>
          John Doe
        </span>
      </div>
    </section>
  );
}
