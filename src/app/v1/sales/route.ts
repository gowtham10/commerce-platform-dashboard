import { constructSalesMockData } from "@/app/shared/mock-helper";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: any = await req.json();
  const { type, filters } = body;

  return NextResponse.json({ ...await constructSalesMockData(type, filters) });
}
