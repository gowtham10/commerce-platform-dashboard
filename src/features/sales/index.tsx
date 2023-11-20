import { PageHeader } from "@/components/page-header";
import styles from "./sales.module.scss";
import { Card } from "@/components/card";
import { SalesProps } from "./sales.interface";
import { MetricContainer } from "../dashboard/dashboard__metric-container";

export function SalesOverview(props: SalesProps) {
  const { cards, metricDetails } = props;

  return (
    <section className={styles["sales"]}>
      <PageHeader title="Sales Overview" />
      <div className={styles["sales__row"]}>
        <Card {...cards} />
      </div>
      <div className={styles["sales__row"]}>
        {metricDetails.map((metricDetail) => {
          const { key, ...rest } = metricDetail;
          return <MetricContainer key={key} {...rest} />;
        })}
      </div>
    </section>
  );
}
