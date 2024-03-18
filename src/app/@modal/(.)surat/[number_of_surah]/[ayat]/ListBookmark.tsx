import { getBookmarks } from "@/services/bookmark/bookmark"

const ListBookmark = async () => {
    const bookmarks = await getBookmarks()
    return (
        <ul>
            {
                bookmarks.map((bookmark: any, i: any) => <li key={i}>{bookmark.name}</li>)
            }
        </ul>
    )
}

export default ListBookmark