import { hot } from "react-hot-loader"

// React Imports
import { ThemeProvider } from "@emotion/react"

import Navigator from "containers/Navigator"
import { theme } from "themes/default"


const RootContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>)
}
export default hot(module)(RootContainer)
