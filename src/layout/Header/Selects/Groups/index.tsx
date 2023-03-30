import { FC, ChangeEvent, memo, useCallback } from 'react'

import { Wrapper } from './style'

import { resetBooksArr, changeSortBy, changeFilterParams } from '@/store'

import { useAppDispatch, useAppSelector } from '@/hooks'

import { SelectGroup } from './SelectGroup'

export const Groups: FC = memo(function () {
  const dispatch = useAppDispatch()
  const books = useAppSelector((store) => store.books)

  const sortSelectHandle = useCallback(function (event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeSortBy(event.target.value))
    dispatch(resetBooksArr())
  }, [books.bookSortOptions])

  const filterSelectHandle = useCallback(function (event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeFilterParams(event.target.value))
  }, [books.bookFilterOptions])

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
})
