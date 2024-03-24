"use client"

import { getSurahName } from "@/app/helper/client"
import { default as ModalComponent } from "@/components/Modal"
import { updateBookmark } from "@/services/bookmark/bookmark"
import { bookmark, bookmarksResponse } from "@/types/bookmark"
import { surat } from "@/types/quran"
import { useParams, useRouter } from "next/navigation"

const Modal = ({ bookmarks, listSurat }: { bookmarks: bookmarksResponse, listSurat: surat[] }) => {
    const router = useRouter()
    const params = useParams()
    const isLayout = !params.ayat
    const handleBookmarkClick = (bookmark: bookmark) => {
        if (isLayout) {
            // router.back()
            router.push(`/surat/${bookmark.surat}#${bookmark.ayat}`)
        } else {
            updateBookmark({ bookmarkId: bookmark.id as string, surat: Number(params.number_of_surah), ayat: Number(params.ayat) })
            router.back()
        }
    }

    return (
        <ModalComponent>
            {isLayout && <h3 className="font-bold text-lg text-center">{`My Bookmarks`}</h3>}
            {!isLayout && <h3 className="font-bold text-lg text-center">{`QS ${getSurahName(Number(params.number_of_surah), listSurat)} : ${params.ayat}`}</h3>}
            {!isLayout && <button className="btn btn-block bg-gray-600 text-white   " onClick={() => router.replace(`/surat/${params.number_of_surah}/${params.ayat}/add`, { scroll: false })}>+ Add new bookmark</button>}
            <ul>
                {
                    bookmarks.data.map((bookmmark: bookmark) => {
                        return (
                            <li key={bookmmark.id} className="mt-1">
                                <button className="btn btn-block flex flex-row justify-between" onClick={() => handleBookmarkClick(bookmmark)}>
                                    <span>
                                        {bookmmark.name}
                                    </span>
                                    <span>
                                        {getSurahName(bookmmark.surat, listSurat)} : {bookmmark.ayat}
                                    </span>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </ModalComponent>
    )
}

export default Modal
