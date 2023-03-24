import { useState, FC, ChangeEvent } from 'react'

import { InputProps } from './types'
import { Wrapper } from './style'

export const Input: FC<InputProps> = function ({placeholder, value, onInput}) {
  return (
    <Wrapper onInput={onInput} placeholder={placeholder} value={value}/>
  )
}