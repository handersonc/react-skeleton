

import { createTheme, Theme, ThemeOptions } from "@mui/material/styles"


const themeOptions: ThemeOptions = {
  palette: {
    common: {
      white: "#fff",
    },
    primary: {
      main: "#0C79C8",
    }
  },
  typography: {
    fontFamily: "Raleway",
    button: {
      fontSize: "0.85rem",
      fontWeight: 600
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  }
}


export const theme = createTheme(themeOptions) as Theme