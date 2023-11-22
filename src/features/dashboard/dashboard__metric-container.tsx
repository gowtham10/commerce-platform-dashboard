"use client";
import { ComponentFactory } from "@/factories/component-factory";
import styles from "./dashboard.module.scss";
import { useRouter } from "next/navigation";
import { MetricContainerProps } from "../common.interface";
import commonStyles from "@/features/common.module.scss";

export function MetricContainer(props: MetricContainerProps) {
  const { redirectUrl, name, type, request, data, filters } = props;
  const router = useRouter();

  const handleClick = () => {
    if (redirectUrl) {
      router.push(redirectUrl);
    }
  };

  return (
    <div
      data-test-id="metrics"
      className={`${styles["dashboard__metric-container"]} ${
        redirectUrl ? commonStyles["cursor-pointer"] : ""
      }`}
      onClick={handleClick}
    >
      <span>{name}</span>
      <ComponentFactory
        type={type}
        request={request}
        data={data}
        filters={filters}
      />
    </div>
  );
}
