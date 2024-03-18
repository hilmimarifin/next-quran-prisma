import prisma from "@/lib/prisma"

export const createBookmark = async ({ name, ayat, surat, userId }: { name: string, ayat: number, surat: number, userId: string }) => {
    try {
        const newBookmark = await prisma.bookmark.create({
            data: {
                name, ayat, surat, userId
            }
        })
        return newBookmark
    } catch (error) {
        console.error(error);

    }
}

export const getBookmarks = async ({ userId }: { userId: string }) => {
    try {        
        const res = await prisma.bookmark.findMany({where: {userId : userId}})
        return res
    } catch (error) {
        console.error(error)
    }

}

export const updateBookmark = async ({ bookmarkId, name, ayat, surat }: { bookmarkId: string, name: string, ayat: number, surat: number }) => {
    try {
        const newBookmark = await prisma.bookmark.update({
            where: {
                id: bookmarkId
            },
            data: {
                name, ayat, surat
            }
        })
        return newBookmark
    } catch (error) {
        console.error(error);

    }
}

