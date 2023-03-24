import { FC, memo } from 'react'

import { fetchBooks } from '@/store'
import { useAppSelector, useAppDispatch } from '@/hooks'

import { Wrapper } from './style'

import { Start } from './Start'
import { Card } from './Card'

import { Cards, Total, Query, ShowMore } from './style'

import { Loader } from '@/components'

export const Home: FC = memo(function () {
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
      <>
        <Total>
          Всего по запросу <Query>{books.query}</Query> найдено{' '}
          {books.totalItems} книг
        </Total>
        <Cards>
          {books.booksArr.map((book) => (
            <Card key={book.id} id={book.id} volumeInfo={book.volumeInfo} />
          ))}
        </Cards>
        {isLoading && <Loader />}
        <ShowMore
          disabled={isLoading}
          fullwidth={true}
          color="primary"
          background="third"
          onClick={showMoreBooks}
        >
          Показать ещё
        </ShowMore>
      </>
    </Wrapper>
  )
})
