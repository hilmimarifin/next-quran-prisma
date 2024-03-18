import React from 'react'
import Modal from './Modal'
import { getListSurat } from '@/services/quran';
import { revalidateTag } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getBookmarks } from '@/app/api/bookmarks/services';


const page = async () => {
    const session = await getServerSession(authOptions)
    const bookmarks = await getBookmarks({userId: session?.user.id as string});
    const listSurat = await getListSurat();
    return (
            <Modal bookmarks={bookmarks} listSurat={listSurat}/>
    )
}

export default page
