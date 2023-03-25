import { Dimensions } from './Dimensions'
import { Colors } from './Colors'
import { Fonts } from './Fonts'

declare module '@emotion/react' {
  export interface Theme extends Dimensions, Colors, Fonts {}
}

export type { Dimensions, Colors, Fonts }