import createMuiTheme, { Color, Palette, Theme, ThemeOptions } from "@mui/material"
import { CommonColors, PaletteColor } from "@mui/material/styles/createPalette";

interface ICommonColors {
    blue: string,
    white: string,
    gray: string,
    green: string,
    black: string,
}

export interface IPalette extends Palette {
  toolbar?: {}
  tabs?: {

  }
  common: ICommonColors
}

export interface ITheme extends Theme {
  palette: IPalette
}

export interface IThemeOptions extends ThemeOptions {
  palette: Partial<IPalette>
}
