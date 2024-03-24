import { getBookmarks } from '@/services/bookmark/getData';
import { getListSurat } from '@/services/quran';
import Modal from './Modal';
import {headers} from 'next/headers'


const page = async () => {
    const bookmarks = await getBookmarks({headers: headers});
    const listSurat = await getListSurat();
    return (
            <Modal bookmarks={bookmarks} listSurat={listSurat}/>
    )
}

export default page
