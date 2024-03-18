import { surat } from "@/types/quran"

export const getSurahName = (suratNumber: number, listsurat: surat[]) => {
    const detailSurah = listsurat.find((surat: surat) => surat.number_of_surah === suratNumber)
    return detailSurah?.name
}