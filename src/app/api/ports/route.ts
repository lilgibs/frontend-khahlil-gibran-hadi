import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter");

  let url = `${process.env.NEXT_PUBLIC_API_URL}pelabuhans`;

  if (filter) {
    url += `?filter=${encodeURIComponent(filter)}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return Response.json(data);
}