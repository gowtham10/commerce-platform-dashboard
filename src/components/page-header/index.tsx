import styles from "./page-header.module.scss";

export interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
  const { title, children } = props;

  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
