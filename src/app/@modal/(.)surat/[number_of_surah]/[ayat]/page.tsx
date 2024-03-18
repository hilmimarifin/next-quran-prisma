import React from 'react'
import Modal from './Modal'
import { getListSurat } from '@/services/quran';
import { revalidateTag } from 'next/cache';
import { getBookmarks } from '@/services/bookmark/getData';


const page = async () => {
    const bookmarks = await getBookmarks();
    const listSurat = await getListSurat();
    revalidateTag('get-bookmarks')
    return (
            <Modal bookmarks={bookmarks} listSurat={listSurat}/>
    )
}

export default page
