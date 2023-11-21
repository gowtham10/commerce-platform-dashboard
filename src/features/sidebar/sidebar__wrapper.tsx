import { RequestType } from "@/components/common.interface";
import { NAV_ITEMS } from "@/constants/requests";
import { constructSWRKey, postFetcher } from "@/helpers";
import useSWR from "swr";
import Sidebar from ".";
import styles from "./sidebar.module.scss";

export function SidebarWrapper() {
  const { data, isLoading } = useSWR(
    constructSWRKey<any>({} as any, NAV_ITEMS as RequestType),
    postFetcher,
  );

  if (isLoading) return null;

  return (
    <div className={styles["sidebar__wrapper"]}>
      <Sidebar navItems={(data as any)?.navItems} />
    </div>
  );
}
