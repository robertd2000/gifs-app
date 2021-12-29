
export interface gifsType {
    gifsList: gifInfoType[]
    error: boolean
    loading: boolean
    search: string
    offset: number
}

export interface gifInfoType {
    title: string
    slug: string
    url: string
    id: string
    images: {
        preview_gif: {
            url: string
        }
    }
}
