import { ChangeEvent, FC, FormEventHandler, MouseEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  changeQuery,
  fetchBooks,
  resetBooksArr,
  changeSortBy,
  changeFilterParams,
  resetStartIndex
} from '@/store'
import { Search, Container, Button, Select } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'

import {
  Wrapper,
  Title,
  Selects,
  SelectGroup,
  Categories,
  Category,
  Close,
  Tags
} from './style'

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
    if (!query) return
    dispatch(resetStartIndex())
    dispatch(resetBooksArr())
    dispatch(changeQuery(query))
    dispatch(fetchBooks())
  }

  const sortSelectHandle = function (event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeSortBy(event.target.value))
    dispatch(resetBooksArr())
  }

  const filterSelectHandle = function (event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeFilterParams(event.target.value))
  }

  const buttonHandler = function (event: MouseEvent<HTMLButtonElement>) {
    dispatch(changeFilterParams((event.target as HTMLButtonElement).value))
  }

  return (
    <Wrapper>
      <Container>
        <Title>Search for books</Title>
        <Search
          placeholder="Введите название книги"
          onSubmit={bookStateChange}
          onInputFunc={inputHandle}
          value={query}
          disabled={books.status === 'loading' || !query.trim()}
        />
        {id && (
          <Button background="transparent" onClick={goBack}>
            Go back
          </Button>
        )}
        <Selects>
          <SelectGroup>
            <p>Сортировать по</p>
            <Select
              onChange={sortSelectHandle}
              startValue={{ name: 'relevance', text: 'популярности' }}
              options={[{ name: 'newest', text: 'дате выхода' }]}
            />
          </SelectGroup>
          <SelectGroup>
            <p>Показывать произведения категорий</p>
            <Select
              multiple
              onChange={filterSelectHandle}
              startValue={{
                name: 'default',
                text: 'выберете категорию',
                disabled: true
              }}
              options={books.bookFilterOptions}
            />
          </SelectGroup>
        </Selects>
        <Categories>
          Список выбранных категорий:{' '}
          <Tags>
            {books.filterParams.map((param) => (
              <Category key={param}>
                <span>{param}</span>
                <Close onClick={buttonHandler} value={param} />
              </Category>
            ))}
          </Tags>
        </Categories>
      </Container>
    </Wrapper>
  )
}
