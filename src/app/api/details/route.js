import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User"; // your user schema

export async function GET() {
  try {
    await connectDB();
    const user = await User.findOne(); // assuming a single user
    return NextResponse.json(user || {});
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch details" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();
    // Create or update user
    const updatedUser = await User.findOneAndUpdate(
      {}, // empty filter
      { ...body }, // data to update
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    console.log(updatedUser);
    return NextResponse.json(updatedUser);
  } catch (err) {
    console.error("PUT error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await connectDB();
    await User.deleteMany({});
    return NextResponse.json({ message: "Details removed" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete details" },
      { status: 500 }
    );
  }
}
