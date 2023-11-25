import { NoFilterTable, SimpleBarChart, TinyBarChart } from "@/components";
import { ComponentTypeKeys } from "@/constants";
import { ComponentFactoryProps } from "./factory.interface";
import { SimpleLineChart } from "@/components/charts/line-chart";

export function ComponentFactory(props: ComponentFactoryProps) {
  const { type, data, request, filters } = props;

  switch (type) {
    case ComponentTypeKeys.TINY_BAR_CHART:
      return (
        <TinyBarChart
          data={data}
          request={request}
          filters={filters}
        />
      );
    case ComponentTypeKeys.SIMPLE_BAR_CHART:
      return (
        <SimpleBarChart
          data={data}
          request={request}
          filters={filters}
        />
      );
    case ComponentTypeKeys.NO_FILTER_TABLE:
      return (
        <NoFilterTable
          data={data}
          request={request}
          filters={filters}
        />
      );
    case ComponentTypeKeys.LINE_CHART:
      return <SimpleLineChart
        data={data}
        request={request}
        filters={filters}
        handleLastUpdated={props.handleLastUpdated}
      />;
    case ComponentTypeKeys.PIE_CHART:
      return null;
    default:
      return null;
  }
}
