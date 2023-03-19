import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      primary: string
      secondary: string
    }
    colors: {
      headerBg: string
      footerBg: string
    }
  }
}
