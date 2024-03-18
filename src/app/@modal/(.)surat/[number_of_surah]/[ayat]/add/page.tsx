"use client"

import { createBookmark } from "@/services/bookmark/bookmark"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
    const router = useRouter()
    const params = useParams()
    const { number_of_surah, ayat } = params
    const [name, setName] = useState("")
    useEffect(() => {
        (document?.getElementById('add_bookmark_modal') as HTMLFormElement).showModal()
    }, [])

    const handleSave = async () => {
        await createBookmark({ name, ayat: Number(ayat), surat: Number(number_of_surah) })
        router.back()
    }

    return (
        <dialog id="add_bookmark_modal" className="modal">
            <div className="modal-box">
                <button onClick={() => router.back()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="flex flex-row gap-4 pt-4">
                    <input type="text" placeholder="Bookmark Name" onChange={(e) => setName(e.target.value)} value={name} className="input input-bordered input-primary w-full max-w-xs" />
                    <button onClick={handleSave} className="btn">Save</button>
                </div>
            </div>
        </dialog>
    )
}

export default Page
