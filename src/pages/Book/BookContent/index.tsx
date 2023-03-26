import { FC, memo } from 'react'

import { BookContentProps } from './types'

import {
  Top,
  Image,
  Block,
  Authors,
  Title,
  Description,
  Categories
} from './style'

import { ErrorContent } from './ErrorContent'

import { ErrorBoundary } from '@/components'

const Component: FC<BookContentProps> = memo(function ({ book }) {
  return (
    <>
      <Top>
        <Image src={book.imageLinks.thumbnail} alt={book.title} />

        <Block>
          <Title>{book.title}</Title>

          <Categories>
            {book.categories && (
              <>
                Категории:
                {book.categories.map((category) => (
                  <p key={category}>{category}</p>
                ))}
              </>
            )}
          </Categories>

          <Authors>
            {book.authors && (
              <>
                {book.authors.length === 1 ? 'Автор: ' : 'Авторы: '}
                {book.authors.map((author) => (
                  <p key={author}>{author}</p>
                ))}
              </>
            )}
          </Authors>
        </Block>
      </Top>

      {book.description && (
        <Description dangerouslySetInnerHTML={{ __html: book.description }} />
      )}
    </>
  )
})

export const BookContent: FC<BookContentProps> = memo(({ book }) => {
  return (
    <ErrorBoundary errorContent={<ErrorContent />}>
      <Component book={book} />
    </ErrorBoundary>
  )
})
