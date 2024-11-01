import { auth } from "@clerk/nextjs/server";
import prisma from "@sarvabazaar/database/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prisma.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (e) {
    console.error("[STORES_POST]", e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
