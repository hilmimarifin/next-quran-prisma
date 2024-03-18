"use client"

import { getSurahName } from "@/app/helper/client"
import { updateBookmark } from "@/services/bookmark/bookmark"
import { bookmark, bookmarksResponse } from "@/types/bookmark"
import { surat } from "@/types/quran"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

const Modal = ({ bookmarks, listSurat }: { bookmarks: bookmark[], listSurat: surat[] }) => {
    const router = useRouter()
    const params = useParams()
    useEffect(() => {
        (document?.getElementById('select_modal') as HTMLFormElement).showModal()
    }, [])

    const handleBookmarkClick = (bookmark : bookmark) => {
        updateBookmark({bookmarkId : bookmark.id as string, surat: Number(params.number_of_surah), ayat: Number(params.ayat)})
        router.back()
    }

    return (
        <dialog id="select_modal" className="modal">
            <div className="modal-box">
                <button onClick={() => router.back()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">{`QS ${getSurahName(Number(params.number_of_surah), listSurat)} : ${params.ayat}`}</h3>
                <button className="btn btn-block bg-gray-600 text-white" onClick={() => router.replace(`/surat/${params.number_of_surah}/${params.ayat}/add`, { scroll: false })}>+ Add new bookmark</button>
                <ul>
                    {
                        bookmarks.map((bookmmark: bookmark) => {
                            return (
                                <li key={bookmmark.id} className="mt-1">
                                    <button className="btn btn-block flex flex-row justify-between" onClick={()=>handleBookmarkClick(bookmmark)}>
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
            </div>
        </dialog>
    )
}

export default Modal
