import { FC } from 'react'

import { fetchBooks } from '@/store'
import { useAppSelector, useAppDispatch } from '@/hooks'

import { Start } from './Start'
import { Card } from './Card'

import { Wrapper, Cards, Total, Query, ShowMore } from './style'

import { Loader } from '@/components'

export const Home: FC = function () {
  const books = useAppSelector((store) => store.books)
  const isLoading = books.status === 'loading'
  const dispatch = useAppDispatch()

  const showMoreBooks = function () {
    dispatch(fetchBooks())
  }

  if (!books.query) {
    return <Start />
  }

  if (isLoading && !books.booksArr.length) {
    return <Loader />
  }

  if (!books.booksArr.length) {
    return <p>Не найдено нужных книг</p>
  }

  return (
    <Wrapper>
      <Total>
        Всего по запросу <Query>{books.query}</Query> найдено {books.totalItems}{' '}
        книг
      </Total>

      <Cards>
        {books.booksArr.map((book) => (
          <Card key={book.id} id={book.id} volumeInfo={book.volumeInfo} />
        ))}
      </Cards>

      {isLoading && <Loader />}

      {!books.shownAllBooks ? (
        <ShowMore
          disabled={isLoading}
          fullwidth={true}
          color="primary"
          background="third"
          onClick={showMoreBooks}
        >
          Показать ещё
        </ShowMore>
      ) : (
        <p>По данному запросу больше нет книг</p>
      )}
    </Wrapper>
  )
}
