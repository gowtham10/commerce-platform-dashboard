import { readJsonFile } from "@/app/shared/file-helper";
import { MockFileNames } from "@/constants";
import { SalesOverview } from "@/features/sales";

export default async function SalesPage() {
  console.log("SalesPage");
  const mockData = await readJsonFile(MockFileNames.SALES_META) as any;

  return <SalesOverview {...mockData} />;
}
