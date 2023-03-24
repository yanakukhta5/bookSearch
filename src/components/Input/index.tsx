import { FC, memo } from 'react'

import { InputProps } from './types'
import { Wrapper } from './style'

export const Input: FC<InputProps> = memo(function ({placeholder, value, onInput}) {
  return (
    <Wrapper onInput={onInput} placeholder={placeholder} value={value}/>
  )
})