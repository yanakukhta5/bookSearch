import { useState, FC, ChangeEvent } from 'react'

import { SearchProps } from './types'
import { Wrapper, Submit, Query } from './style'

export const Search: FC<SearchProps> = function ({ placeholder, value, onInputFunc, onSubmit }) {  
  return (
    <Wrapper onSubmit={onSubmit}>
      <Query onInput={onInputFunc} type="search" placeholder={placeholder} value={value} />
      <Submit fullwidth={false} color="secondary" background="primary" type="submit"></Submit>
    </Wrapper>
  )
}
