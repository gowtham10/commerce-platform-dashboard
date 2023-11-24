import { readJsonFile } from "@/app/shared/mock-helper";
import { MockFileNames } from "@/constants";
import { CustomerAnalytics } from "@/features/customers";

export default async function CustomersPage() {
  const mockData = await readJsonFile(MockFileNames.CUSTOMERS_META) as any;

  return <CustomerAnalytics {...mockData} />;
}
