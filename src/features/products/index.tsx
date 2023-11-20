import { PageHeader } from "@/components/page-header";
import styles from "./products.module.scss";
import { Card } from "@/components/card";
import { MetricContainer } from "../dashboard/dashboard__metric-container";
import { ProductProps } from "./products.interface";

export function ProductPerformance(props: ProductProps) {
  const { cards, metricDetails } = props;

  return (
    <section className={styles["products"]}>
      <PageHeader title="Product Performance" />
      <div className={styles["products__row"]}>
        <Card {...cards} />
      </div>
      <div className={styles["products__row"]}>
        {metricDetails.map((metricDetail) => {
          const { key, ...rest } = metricDetail;
          return <MetricContainer key={key} {...rest} />;
        })}
      </div>
    </section>
  );
}
