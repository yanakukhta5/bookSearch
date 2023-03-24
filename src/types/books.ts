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

export type sortBy = 'relevance' | 'newest'

type filterParam = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'

export type filterParams = filterParam[]

export interface bookFilterOption {
 name: string
 text: string
 disabled?: boolean
}

export interface bookSortOption {
  name: string
  text: string
}