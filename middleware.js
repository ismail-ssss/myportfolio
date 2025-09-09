import { NextResponse } from "next/server";
import { connectDB } from "./src/lib/mongodb";
import Analytics from "./src/models/Analytics";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    await connectDB();
    await Analytics.updateOne({}, { $inc: { visits: 1 } }, { upsert: true });
  }
  return NextResponse.next();
}
