export interface bookmarksResponse {
    data: bookmark[]
}

export interface bookmark{
    id?: string,
    name: string,
    surat: number,
    ayat: number,
    userId: string
}

