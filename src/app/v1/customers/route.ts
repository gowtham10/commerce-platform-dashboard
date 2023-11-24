import { constructCustomerMockData } from "@/app/shared/mock-helper";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { type, filters } = body;

  return NextResponse.json({
    ...await constructCustomerMockData(type, filters),
  });
}
