export interface surat {
    name: string,
    name_translations?: translation,
    number_of_ayah: number,
    number_of_surah: number,
    place?: string,
    recitation?: string,
    type?: string
}

interface translation {
    ar?: string,
    en?: string,
    id?: string
}

export interface suratDetail {
    "name": string,
    "name_translations": translation,
    "number_of_ayah": number,
    "number_of_surah": number,
    "place": string,
    "recitations": recitations[],
    "type": string,
    "verses": ayat[],
    "tafsir": tafsir
}

interface recitations {
    "name": string,
    "audio_url": string
}

export interface ayat {
    "number": number,
    "text": string,
    "translation_en"?: string,
    "translation_id"?: string
}

interface tafsir {
    id: {
        kemenag: {
            name: string,
            source: string,
            text: {}
        }
    }
}