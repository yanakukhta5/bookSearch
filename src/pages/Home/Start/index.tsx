import { FC } from 'react'

import { Wrapper, Intro, Description } from './style'

export const Start: FC = function () {
  return (
    <Wrapper>
      <Intro>Начните поиск книг со всего мира</Intro>
      <Description>
        Поиск книг осуществляется через сервис Google Books API
      </Description>
    </Wrapper>
  )
}
