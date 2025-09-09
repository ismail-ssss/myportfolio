// /app/api/upload/route.js
import { v2 as cloudinary } from "cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    const uploaded = await cloudinary.uploader.upload(file, {
      folder: "portfolio_projects",
    });

    return new Response(JSON.stringify({ url: uploaded.secure_url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
