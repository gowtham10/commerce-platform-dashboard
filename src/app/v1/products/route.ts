import { readJsonFile } from "@/app/shared/file-helper";
import { MockFileNames } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const mockData = await readJsonFile(
    MockFileNames.TOP_10_PRODUCTS
  ) as any;

  return NextResponse.json({ ...mockData });
}

