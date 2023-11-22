"use client";
import Sidebar from "@/features/sidebar";
import styles from "./page-header.module.scss";
import { Bars4Icon, CubeTransparentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { SidebarWrapper } from "@/features/sidebar/sidebar__wrapper";

export interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
  const { title, children } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <section className={styles.container}>
      <div className={styles["container__icon"]}>
        <Bars4Icon height={24} width={24} onClick={handleSideBar}/>
        <CubeTransparentIcon height={24} width={24} color="#FFC42A"/>
        {isSidebarOpen && <SidebarWrapper />}
      </div>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
