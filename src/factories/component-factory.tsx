import { NoFilterTable, SimpleBarChart, TinyBarChart } from "@/components";
import { ComponentTypeKeys } from "@/constants";
import { ComponentFactoryProps } from "./factory.interface";

export function ComponentFactory(props: ComponentFactoryProps) {
  const { type, name, description, data, request } = props;

  switch (type) {
    case ComponentTypeKeys.TINY_BAR_CHART:
      return (
        <TinyBarChart
          data={data}
          description={description}
          request={request}
          chartName={name}
        />
      );
    case ComponentTypeKeys.SIMPLE_BAR_CHART:
      return (
        <SimpleBarChart
          data={data}
          description={description}
          request={request}
          chartName={name}
        />
      );
    case ComponentTypeKeys.NO_FILTER_TABLE:
      return (
        <NoFilterTable
          data={data}
          description={description}
          request={request}
          tableName={name}
        />
      );
    case ComponentTypeKeys.PIE_CHART:
      return null;
    default:
      return null;
  }
}
