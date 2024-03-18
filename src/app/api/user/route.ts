import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUser } from "./services";

export async function GET() {
    const session = await getServerSession(authOptions);

    const data = await getUser({id: session?.user.id as string})

    return NextResponse.json({ data })
}

