import { FC, ChangeEvent } from 'react'

import { Wrapper } from './style'

import { resetBooksArr, changeSortBy, changeFilterParams } from '@/store'

import { useAppDispatch, useAppSelector } from '@/hooks'

import { SelectGroup } from './SelectGroup'

export const Groups: FC = function () {
  const dispatch = useAppDispatch()
  const books = useAppSelector((store) => store.books)

  const sortSelectHandle = function (event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeSortBy(event.target.value))
    dispatch(resetBooksArr())
  }

  const filterSelectHandle = function (event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeFilterParams(event.target.value))
  }

  return (
    <Wrapper>
      <SelectGroup
        description="Сортировать по"
        onChange={sortSelectHandle}
        options={books.bookSortOptions}
      />

      <SelectGroup
        description="Показывать произведения категорий"
        onChange={filterSelectHandle}
        options={books.bookFilterOptions}
        multiple
        hideFirst
        startValue={{
          name: 'default',
          text: 'выберете категорию',
          disabled: true
        }}
      />
    </Wrapper>
  )
}
