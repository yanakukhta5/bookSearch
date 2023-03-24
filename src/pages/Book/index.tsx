import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BookContent } from './BookContent'

import { Loader } from '@/components'

import { TBook } from '@/types'
import { books } from '@/services'
import { Wrapper } from './style'

export const Book: FC = function () {
  const { id } = useParams()

  const [book, setBook] = useState<TBook | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getBook = async () => await books.getBook(id as string)

  useEffect(() => {
    getBook()
      .then((result) => {
        setBook(result)
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Wrapper>
      <BookContent book={book as TBook} />
    </Wrapper>
  )
}
