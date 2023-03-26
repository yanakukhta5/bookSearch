import axios from 'axios'

import { Item, TBook, sortBy, filterParams } from '@/types'

interface TBooks {
  items: Item[]
  totalItems: number
}

class Books {
  private key = 'AIzaSyDPHGQshhGJnvCtrVbm7CmUIS-gBhjjCWo'
  protected url = 'https://www.googleapis.com/books/v1/volumes/'

  async getBooks(
    query: string,
    startIndex: number,
    orderBy: sortBy = 'relevance',
    filterParams: filterParams = ['all']
  ): Promise<TBooks> {
    const subject = 'subject:' + filterParams.join('+')
    const response = await axios.get(this.url, {
      params: {
        q: query + subject,
        startIndex,
        maxResults: 30,
        quotaUser: 'booksearch-381116',
        key: this.key,
        orderBy
      }
    })
    return response.data
  }

  async getBook(id: string): Promise<TBook> {
    const response = await axios.get(this.url  + id, {
      params: {
        key: this.key
      }
    })
    return response.data.volumeInfo
  }
}

export const books = new Books()
