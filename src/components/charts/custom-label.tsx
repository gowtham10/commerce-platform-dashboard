import styles from "./chart.module.scss";

export const CustomTooltip = ({ active, payload, label, meta }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className="label">{label}</p>
        {payload?.map((item: any, index: number) => {
          const prefix = meta?.prefix || "";
          const suffix = meta?.suffix || "";
          return (
            <p key={index} style={{ color: item?.stroke || item?.fill }}>
              {`${item.dataKey}: ${prefix}${item.value} ${suffix}`}
            </p>
          );
        })}
      </div>
    );
  }

  return null;
};
