"use client";
import { Company } from "./sidebar__company";
import { NavBar } from "./sidebar__navbar";
import { Profile } from "./sidebar__profile";
import { SidebarProps } from "./sidebar.interface";
import styles from "./sidebar.module.scss";

export default function Sidebar(props: SidebarProps) {
  const { navItems } = props;
  return (
    <div className={styles['sidebar__container']}>
      <Company />
      <NavBar navItems={navItems}/>
      <Profile />
    </div>
  );
}
