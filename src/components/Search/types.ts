import { ChangeEvent, HTMLProps } from 'react'

export interface SearchProps extends HTMLProps<HTMLFormElement> {
  startValue?: string
  onInputFunc?: (event: ChangeEvent<HTMLInputElement>) => void
}
