import { FC } from 'react'

import { BookContentProps } from './types'

import {
  Top,
  Image,
  Text,
  Authors,
  Title,
  Description,
  Categories
} from './style'

import { ErrorContent } from './ErrorContent'

import { ErrorBoundary } from '@/components'

const Component: FC<BookContentProps> = function ({ book }) {
  return (
    <>
      <Top>
        <Image src={book.imageLinks.thumbnail} alt={book.title} />

        <Text>
          <Title>{book.title}</Title>

          <Categories>
            Категории:
            {book.categories.map((category) => (
              <p key={category}>{category}</p>
            ))}
          </Categories>

          <Authors>
            {book.authors.length === 1 ? 'Автор: ' : 'Авторы: '}
            {book.authors.map((author) => (
              <p key={author}>{author}</p>
            ))}
          </Authors>
        </Text>
      </Top>

      <Description>{book.description}</Description>
    </>
  )
}

export const BookContent: FC<BookContentProps> = ({ book }) => {
  return (
    <ErrorBoundary errorContent={<ErrorContent />}>
      <Component book={book} />
    </ErrorBoundary>
  )
}
