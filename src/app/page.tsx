import styles from "./page.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { HomeIcon } from "@heroicons/react/24/outline";
import { DatePicker } from "@/components/date-picker";
import { TableSkeleton } from "@/components/table/table-skeleton";
import { NoFilterTable } from "@/components/table/no-filter.table";

export default function Dashboard() {
  return (
    <section style={{color: "#000"}}>
      <h3>
        <HomeIcon width={30} height={30} />
        Dashboard coming soon...
      </h3>
      <DatePicker />
      <TableSkeleton />
      <NoFilterTable
        data={{
          content: [{ name: "test", id: 1 }],
          headers: [{ key: "name", title: "Name" }, { key: "id", title: "ID" }]
        } as any}
      />

      {/*
      <SimpleBarChart
        data={[{
          xAxisName: "01/11/2021",
          totalValue: 100,
          value: 20,
        }, {
          xAxisName: "02/11/2021",
          totalValue: 100,
          value: 40,
        }]}
      />*/}
    </section>
  );
}
