import { FC } from 'react'

import { fetchBooks } from '@/store'
import { useAppSelector, useAppDispatch } from '@/hooks'

import { Card } from './Card'
import { Start } from './Start'
import { Cards, Wrapper, Total, Query, ShowMore } from './style'

export const Home: FC = function () {
  const books = useAppSelector((store) => store.books)
  const isLoading = books.status === 'loading'
  const dispatch = useAppDispatch()

  const showMoreBooks = function () {
    dispatch(fetchBooks())
  }

  return (
    <Wrapper>
      {books.booksArr.length !== 0 ? (
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
          {isLoading && <p>lading</p>}
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
      ) : (
        <> { isLoading ? <p>loading</p> : <Start /> } </>
      )}
    </Wrapper>
  )
}
