import { readJsonFile } from "@/app/shared/mock-helper";
import { MockFileNames } from "@/constants";
import { ProductPerformance } from "@/features/products";

export default async function ProductsPage() {
  const mockData = await readJsonFile(MockFileNames.PRODUCTS_META) as any;

  return <ProductPerformance {...mockData} />;
}
