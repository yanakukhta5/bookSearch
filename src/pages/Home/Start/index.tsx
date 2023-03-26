import { FC, memo } from 'react'

import { Wrapper, Intro, Description } from './style'

export const Start: FC = memo(function () {
  return (
    <Wrapper>
      <Intro>Начните поиск книг со всего мира</Intro>

      <Description>
        Поиск книг осуществляется через сервис Google Books API
      </Description>
    </Wrapper>
  )
})
