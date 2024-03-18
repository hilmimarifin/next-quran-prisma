import { bookmarksResponse } from "@/types/bookmark";
import { headers } from "next/headers";
import { BOOKMARK_API } from "../urls";


export const getBookmarks = async (): Promise<bookmarksResponse> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}${BOOKMARK_API}`, {method: "GET", next: {tags: ["get-bookmarks"]}, headers: new Headers(headers())})
        return res.json()
    } catch (error: any) {
        throw new Error('Failed to fetch list of surat: ' + error.message);   
    }
}
