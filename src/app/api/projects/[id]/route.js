// import { NextResponse } from "next/server";
// import connectDB from "@/lib/mongodb";
// import Project from "@/models/Project";

// export async function GET(req, { params }) {
//   try {
//     await connectDB();
//     const project = await Project.findById(params.id);
//     if (!project)
//       return NextResponse.json({ error: "Not found" }, { status: 404 });
//     return NextResponse.json(project);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

// export async function PUT(req, { params }) {
//   try {
//     await connectDB();
//     const data = await req.json();
//     const project = await Project.findByIdAndUpdate(params.id, data, {
//       new: true,
//     });
//     return NextResponse.json(project);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

// export async function DELETE(req, { params }) {
//   try {
//     await connectDB();
//     await Project.findByIdAndDelete(params.id);
//     return NextResponse.json({ message: "Project deleted" });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET(req, { params }) {
  await connectDB();
  const project = await Project.findById(params.id);
  return NextResponse.json(project);
}

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  const updated = await Project.findByIdAndUpdate(params?.id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Project.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted" });
}
