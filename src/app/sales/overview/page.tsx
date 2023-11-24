import { readJsonFile } from "@/app/shared/mock-helper";
import { MockFileNames } from "@/constants";
import { SalesOverview } from "@/features/sales";

export default async function SalesPage() {
  const mockData = await readJsonFile(MockFileNames.SALES_META) as any;

  return <SalesOverview {...mockData} />;
}
