import { NextRequest, NextResponse } from "next/server";
import { searchAirports } from "@/data/airports";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const results = searchAirports(query, Math.min(limit, 50));

  return NextResponse.json(results);
}
