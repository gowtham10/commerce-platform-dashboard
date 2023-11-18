import { IconFactory } from "@/factories/icon-factory";
import { NavItemProps } from "./sidebar.interface";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export function NavItem(props: NavItemProps) {
  const {
    icon,
    displayName,
    path,
    children,
    isSelected,
    isExpanded,
    isParentItem,
  } = props;

  const ParentIcon = isExpanded ? MinusCircleIcon : PlusCircleIcon;

  return (
    <li className={styles["sidebar__nav-item"]}>
      <Link href={path} className={`${styles["sidebar__nav-link"]} ${(isExpanded || isSelected) && styles["sidebar__nav-link__active"]}`}>
        <IconFactory iconName={icon as string} />
        <span>{displayName}</span>
        {isParentItem && <ParentIcon width={20} height={20} />}
      </Link>
      {children}
    </li>
  );
}
