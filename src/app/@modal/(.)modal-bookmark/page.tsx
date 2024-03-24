import { getBookmarks } from "@/services/bookmark/getData"
import { getListSurat } from "@/services/quran";
import ModalBookmark from "./ModalBookmark";
import Modal from "../(.)surat/[number_of_surah]/[ayat]/Modal";
import {headers} from 'next/headers'

const page = async () => {
    const bookmarks = await getBookmarks({headers: new Headers(headers())});
    const listSurat = await getListSurat();

    return (
        <Modal bookmarks={bookmarks} listSurat={listSurat}/>
        )
}

export default page