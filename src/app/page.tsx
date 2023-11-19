import { readJsonFile } from "./shared/file-helper";
import { MockFileNames } from "@/constants";
import { Dashboard } from "@/features/dashboard";

export default async function DashboardPage() {
  const mockData = await readJsonFile(MockFileNames.DASHBOARD_META) as any;

  return <Dashboard {...mockData}/>;
}
