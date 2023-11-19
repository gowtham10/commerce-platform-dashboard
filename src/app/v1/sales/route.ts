import { readJsonFile } from "@/app/shared/file-helper";
import { MockFileNames } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const mockData = await readJsonFile(
    MockFileNames.LAST_10_DAYS_REVENUE,
  ) as any;

  return NextResponse.json(mockData.data);
}
