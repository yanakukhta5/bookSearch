import { FC, MouseEvent, memo } from 'react'

import { Categories, Category, Close, Tags } from './style'

import { changeFilterParams } from '@/store'

import { useAppDispatch, useAppSelector } from '@/hooks'

export const TagList: FC = memo(function () {
  const dispatch = useAppDispatch()
  const books = useAppSelector((store) => store.books)

  const buttonHandler = function (event: MouseEvent<HTMLButtonElement>) {
    dispatch(changeFilterParams((event.target as HTMLButtonElement).value))
  }
  return (
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
  )
})
