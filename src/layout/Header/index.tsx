import { ChangeEvent, FC, FormEventHandler, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { changeQuery, fetchBooks, resetBooksArr } from '@/store'
import { Search, Container, Button } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { Wrapper, Title } from './style'

export const Header: FC = function () {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const { id } = useParams()

  const goBack = () => navigate(-1)

  const books = useAppSelector((store) => store.books)

  const [query, setQuery] = useState<string>(books.query)

  const inputHandle = function (event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  const bookStateChange: FormEventHandler<HTMLFormElement> = function (event) {
    event?.preventDefault()
    dispatch(resetBooksArr())
    dispatch(changeQuery(query))
    dispatch(fetchBooks())
  }

  return (
    <Wrapper>
      <Container>
        <Title>Search for books</Title>
        <Search
          onSubmit={bookStateChange}
          onInputFunc={inputHandle}
          value={query}
          disabled={books.status === 'loading'}
        />
        {id && (
          <Button background="transparent" onClick={goBack}>
            Go back
          </Button>
        )}
      </Container>
    </Wrapper>
  )
}
