interface imageLinksProps {
 thumbnail: string
}

export interface TBook {
 imageLinks: imageLinksProps
 title: string
 authors: string[]
 categories: string[]
 description: string
}

export interface Item {
 volumeInfo: TBook
 id: string
}
