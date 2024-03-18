import { surat, suratDetail } from "@/types/quran"
import { QURAN_API } from "./urls"

const listSuratAPI = `${QURAN_API}/quran.json`
export const getListSurat = async (): Promise<surat[]> => {
    try {
        const res = await fetch(listSuratAPI)
        return res.json()
    } catch (error: any) {
        throw new Error('Failed to fetch list of surat: ' + error.message);
    }
}

export const getDetailSurat = async ({ number_of_surah }: { number_of_surah: number }): Promise<suratDetail> => {
    try {
        const res = await fetch(`${QURAN_API}/surah/${number_of_surah}.json`)
        return res.json()
    } catch (error: any) {
        throw new Error('Failed to fetch list of surat: ' + error.message);
    }
}