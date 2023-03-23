import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      primary: string
      secondary: string
    }
    colors: {
      primary: string
      secondary: string
      third: string
      headerBg: string
      footerBg: string
      overlay: string
      backup: string
      mainBg: string
      transparent: string
    }
    dimensions: {
      xs: string
      s: string
      md: string
      lg: string
      xl: string
    }
  }
}
