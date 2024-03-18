import ArabFont from '@/components/ArabFont'
import { getListSurat } from '@/services/quran'
import { surat } from '@/types/quran'
import Link from 'next/link'

const Item = async({ surat }: { surat: surat }) => {    
  return (
    <li>
      <Link href={`/surat/${surat.number_of_surah}`}>
        <div className='flex flex-row justify-between border-b-2 border-gray-300 py-3  '>
          <div className='flex flex-col'>
            <span className='font-semibold'>{surat.number_of_surah}.{" "}{surat.name}</span>
            <span className='text-xs'>{surat.name_translations?.id}</span>
          </div>
          <ArabFont>
            {surat.name_translations?.ar}
          </ArabFont>
        </div>
      </Link >
    </li>
  )
}
export default async function Home() {
  const data = await getListSurat()

  return (
    <main>
            <ul>
              {data.map((surat) => <Item surat={surat} key={surat.number_of_surah} />)}
            </ul>
    </main>
  )
}
