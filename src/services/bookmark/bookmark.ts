import { BOOKMARK_API } from "../urls";

export const createBookmark= async ({ name, ayat, surat }: { name: string, ayat: number, surat: number }) => {
    try {
        const res = await fetch(`${BOOKMARK_API}`, {method: "POST", body: JSON.stringify({name, ayat, surat})})
        return res
    } catch (error) {
        console.error(error);
        
    }
}

export const updateBookmark= async ({ name, ayat, surat, bookmarkId }: { name?: string, ayat?: number, surat?: number, bookmarkId: string }) => {
    try {
        const res = await fetch(`${BOOKMARK_API}`, {method: "PUT", body: JSON.stringify({name, ayat, surat, bookmarkId})})
        return res
    } catch (error) {
        console.error(error);
        
    }
}

