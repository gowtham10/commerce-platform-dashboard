import { PageHeader } from "@/components/page-header";
import styles from "./customers.module.scss";
import { Card } from "@/components/card";
import { MetricContainer } from "../dashboard/dashboard__metric-container";
import { CustomerProps } from "./customers.interface";

export function CustomerAnalytics(props: CustomerProps) {
  const { cards, metricDetails } = props;

  return (
    <section className={styles["customers"]}>
      <PageHeader title="Customer Analytics" />
      <div className={styles["customers__row"]}>
        <Card {...cards} />
      </div>
      <div className={styles["customers__row"]}>
        {metricDetails.map((metricDetail) => {
          const { key, ...rest } = metricDetail;
          return <MetricContainer key={key} {...rest} />;
        })}
      </div>
    </section>
  );
}
