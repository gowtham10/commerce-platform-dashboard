"use client";
import { ComponentFactory } from "@/factories/component-factory";
import styles from "./dashboard.module.scss";
import { MetricContainerProps } from "./dashboard.interface";
import { useRouter } from "next/navigation";

export function MetricContainer(props: MetricContainerProps) {
  const { redirectUrl, name, type, request, data } = props;
  const router = useRouter();

  const handleClick = () => {
    if (redirectUrl) {
      router.push(redirectUrl);
    }
  };

  return (
    <div className={styles["dashboard__metric-container"]} onClick={handleClick}>
      <span>{name}</span>
      <ComponentFactory
        type={type}
        request={request}
        data={data}
      />
    </div>
  );
}
