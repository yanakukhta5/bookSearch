import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { TBook } from '@/types'
import { books } from '@/services'
import {
  Wrapper,
  Image,
  Title,
  Authors,
  Categories,
  Description,
  Text,
  Top
} from './style'

export const Book: FC = function () {
  const { id } = useParams()

  const [book, setBook] = useState<TBook | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getBook = async () => await books.getBook(id as string)

  useEffect(() => {
    getBook().then((result) => {
      setBook(result)
      setIsLoading(false)
      console.log(result)
    })
  }, [])

  if (!book) {
    return (
      <Wrapper>
        <p>loading</p>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Top>
        <Image src={book.imageLinks.thumbnail} alt={book.title} />

        <Text>
          <Title>{book.title}</Title>

          <Categories>
            Категории:{' '}
            {book.categories.map((category) => (
              <p>{category}</p>
            ))}
          </Categories>

          <Authors>
            {book.authors.length === 1 ? 'Автор: ' : 'Авторы: '}
            {book.authors.map((author) => (
              <p>{author}</p>
            ))}
          </Authors>
        </Text>
      </Top>

      <Description>{book.description}</Description>
    </Wrapper>
  )
}
