import { ReactNode, HTMLProps } from 'react'

import { TColor } from '@/types'

export type ButtonProps = HTMLProps<HTMLButtonElement> & Partial<{
  fullwidth?: boolean
  color?: TColor
  background?: TColor
}>
