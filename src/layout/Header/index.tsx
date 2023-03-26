import { ChangeEvent, FC, MouseEvent, useState, memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { resetBooksArr, changeSortBy, changeFilterParams } from '@/store'
import { Container, Button, Select } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { SearchForm } from './SearchForm'

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

export const Header: FC = memo(function () {
  const dispatch = useAppDispatch()
  const books = useAppSelector((store) => store.books)

  const { id } = useParams()

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

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

        <SearchForm />

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
              options={books.bookSortOptions}
            />
          </SelectGroup>

          <SelectGroup>
            <p>Показывать произведения категорий</p>
            <Select
              hideFirst
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
})
