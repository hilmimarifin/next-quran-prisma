"use client"

import { getSurahName } from '@/app/helper/client'
import { bookmark, bookmarksResponse } from '@/types/bookmark'
import { surat } from '@/types/quran'
import { useRouter } from 'next/navigation'
import React from 'react'


const ListBookmark = ({ bookmarks, listSurat, className }: { bookmarks: bookmark[], listSurat: surat[], className?: string }) => {
  const router = useRouter()
  return (
    <ul tabIndex={0} className={`${className}`}>
      {
        bookmarks.map((bookmark: bookmark) => {
          return (
            <li key={bookmark.id} onClick={()=>router.push(`/surat/${bookmark.surat}#${bookmark.ayat}`)}>
              <div className='flex flex-row justify-between'>
                <span>
                  {bookmark.name}
                </span>
                <span className='text-xs italic'>
                  {getSurahName(bookmark.surat, listSurat)} : {bookmark.ayat}
                </span>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListBookmark