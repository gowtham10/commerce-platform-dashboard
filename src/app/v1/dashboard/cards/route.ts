import { readJsonFile } from "@/app/shared/mock-helper";
import { MockFileNames } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const mockData = await readJsonFile(
    MockFileNames.DASHBOARD_CARDS,
  ) as any;

  return NextResponse.json({...mockData});
}


