import { Palette, Theme, ThemeOptions } from "@mui/material"

interface ICommonColors {
    blue: string,
    white: string,
    gray: string,
    green: string,
    black: string,
}

export interface IPalette extends Palette {
  toolbar?: any
  tabs?: any
  common: ICommonColors
}

export interface ITheme extends Theme {
  palette: IPalette
}

export interface IThemeOptions extends ThemeOptions {
  palette: Partial<IPalette>
}
