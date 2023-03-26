import { HTMLProps } from 'react'

import { bookFilterOption } from '@/types'

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: bookFilterOption[]
  startValue?: bookFilterOption
  hideFirst?: boolean
}
