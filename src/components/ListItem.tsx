import { surat } from "@/types/quran"
import Link from "next/link"

const Item = ({ surat }: { surat: surat }) => {
    return (
        <li>
            <Link href={`/surat/${surat.number_of_surah}`}>
                <div className='flex flex-row justify-between border-b-2 border-gray-300 py-3  '>
                    <div className='flex flex-col'>
                        <span>{surat.number_of_surah}.{" "}{surat.name}</span>
                        <span>{surat.name_translations?.id}</span>
                    </div>
                    <div>
                        {surat.name_translations?.ar}
                    </div>
                </div>
            </Link >
        </li>
    )
}

export default Item