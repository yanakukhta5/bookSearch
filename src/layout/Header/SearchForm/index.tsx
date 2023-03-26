import { FC, FormEventHandler, useState, ChangeEvent } from 'react'

import { Search } from '@/components'

import { useNavigate } from 'react-router-dom'

import {
  changeQuery,
  fetchBooks,
  resetBooksArr,
  resetStartIndex
} from '@/store'

import { useAppDispatch, useAppSelector } from '@/hooks'

export const SearchForm: FC = function () {

  const books = useAppSelector((store) => store.books)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const goHome = () => navigate('/')

  const [query, setQuery] = useState<string>(books.query)

  const inputHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.trim())
  }
  
  const bookStateChange: FormEventHandler<HTMLFormElement> = function (event) {
    event?.preventDefault()
    if (!query) return
    dispatch(resetStartIndex())
    dispatch(resetBooksArr())
    dispatch(changeQuery(query))
    dispatch(fetchBooks())
    goHome()
  }

  return (
    <Search
      placeholder="Введите название книги"
      onSubmit={bookStateChange}
      onInputFunc={inputHandle}
      value={query}
      disabled={books.status === 'loading' || !query}
    />
  )
}
