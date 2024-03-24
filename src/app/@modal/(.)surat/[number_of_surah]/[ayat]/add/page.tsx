"use client"

import Modal from "@/components/Modal"
import { createBookmark } from "@/services/bookmark/bookmark"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

const Page = () => {
    const router = useRouter()
    const params = useParams()
    const { number_of_surah, ayat } = params
    const [name, setName] = useState("")

    const handleSave = async () => {
        await createBookmark({ name, ayat: Number(ayat), surat: Number(number_of_surah) })
        router.back()
    }

    return (
        <Modal>
                    <div className="flex flex-row gap-4 pt-4">
                        <input type="text" placeholder="Bookmark Name" onChange={(e) => setName(e.target.value)} value={name} className="input input-bordered input-primary w-full max-w-xs" />
                        <button onClick={handleSave} className="btn">Save</button>
                    </div>
        </Modal>
    )
}

export default Page
