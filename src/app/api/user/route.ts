import { createBookmark, getBookmarks } from "@/services/bookmark/bookmark"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./services";

export async function GET() {
    const session = await getServerSession(authOptions);

    const data = await getUser({id: session?.user.id as string})

    return NextResponse.json({ data })
}

