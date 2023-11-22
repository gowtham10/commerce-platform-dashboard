import Skeleton from "react-loading-skeleton";
import styles from "./chart-skeleton.module.scss";

export function BarChartSkeleton() {
  return (
    <div className={styles.container}>
      <Skeleton containerClassName={styles["container__skeleton"]} height={200} width={50} inline={true}/>
      <Skeleton containerClassName={styles["container__skeleton"]} height={100} width={50} inline={true}/>
      <Skeleton containerClassName={styles["container__skeleton"]} height={180} width={50} inline={true}/>
      <Skeleton containerClassName={styles["container__skeleton"]} height={75} width={50} inline={true}/>
      <Skeleton containerClassName={styles["container__skeleton"]} height={120} width={50} inline={true}/>
      <Skeleton containerClassName={styles["container__skeleton"]} height={150} width={50} inline={true}/>
      <Skeleton containerClassName={styles["container__skeleton"]} height={20} width={50} inline={true}/>
    </div>
  );
}
