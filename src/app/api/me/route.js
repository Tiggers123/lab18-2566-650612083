import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Tiger Tanner",
    studentId: "650612083",
  });
};
