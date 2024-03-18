"use client"
import ArabFont from "@/components/ArabFont"
import { ayat } from "@/types/quran"
import { useRouter, usePathname, useParams, } from "next/navigation"

const ListItem = ({ number, text, translation_en, translation_id }: ayat) => {
    const router = useRouter()
    const params= useParams()
    return (
        <li className='border-b-2 border-gray-300 py-3 '
            onClick={() => {
                router.push(`/surat/${params.number_of_surah}/${number}`, {scroll: false});
                // (document?.getElementById('my_modal_1') as HTMLFormElement).showModal()
            }}
            id={String(number)}
        >
            <div className='flex flex-row-reverse justify-between text-end '>
                <div className='flex flex-col'>
                    <ArabFont>{text}</ArabFont>
                </div>
            </div>
            <p >
                {number}.{" "}{translation_id}
            </p>
        </li>
    )
}

export default ListItem