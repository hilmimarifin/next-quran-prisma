import { bookmarksResponse } from "@/types/bookmark";
import { BOOKMARK_API } from "../urls";

export const getBookmarks = async ({headers}: {headers: any}): Promise<bookmarksResponse> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}${BOOKMARK_API}`, {method: "GET", next: {tags: ["get-bookmarks"]}, headers})
        return res.json()
    } catch (error: any) {
        throw new Error('Failed to fetch list of surat: ' + error.message);   
    }
}
