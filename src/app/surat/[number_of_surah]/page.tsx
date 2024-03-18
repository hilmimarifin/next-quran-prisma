import { getDetailSurat } from '@/services/quran';
import { revalidateTag } from 'next/cache';
import ListItem from './ListItem';

const page = async ({ params }: { params: { number_of_surah: number } }) => {
    const { number_of_surah } = params
    const data = await getDetailSurat({ number_of_surah })
    revalidateTag("get-bookmarks")

    
    return (
        <div>
            <ul>
                {data.verses.map((ayat) => <ListItem number={ayat.number} text={ayat.text} key={ayat.number} translation_id={ayat.translation_id} />)}
            </ul>
        </div>
    )
}

export default page