import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { createBookmark, getBookmarks, updateBookmark } from "./services";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET() {
    const session = await getServerSession(authOptions);
    const data = await getBookmarks({userId: session?.user.id as string})    
    return NextResponse.json({ data })
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    const {ayat, surat, name } = await request.json()
    const data = await createBookmark({userId: session?.user.id as string, ayat, surat, name})
    revalidateTag("get-bookmarks")
    return NextResponse.json({data})
}

export async function PUT(request: NextRequest) {
    const {ayat, surat, name, bookmarkId } = await request.json()
    const data = await updateBookmark({bookmarkId: bookmarkId as string, ayat, surat, name})
    revalidateTag("get-bookmarks")
    return NextResponse.json({data})
}