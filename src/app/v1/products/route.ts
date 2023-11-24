import { readJsonFile } from "@/app/shared/mock-helper";
import { MockFileNames } from "@/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { type } = body;
  const mockData = await readJsonFile(
    MockFileNames[type as keyof typeof MockFileNames],
  ) as any;

  return NextResponse.json({ ...mockData });
}
