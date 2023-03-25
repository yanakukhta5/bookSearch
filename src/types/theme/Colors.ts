export type Colors = {
  colors: {
    primary: string
    secondary: string
    third: string
    headerBg: string
    footerBg: string
    overlay: string
    backup: string
    mainBg: string
    transparent: '#00000000'
    accent: string
  }
}

export type TColor = keyof Colors['colors']