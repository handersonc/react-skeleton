
//.storybook/preview.js
import { muiTheme } from 'storybook-addon-material-ui5'
import { theme } from '../src/themes'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // opt-out of inline rendering
    inlineStories: false,
  },
}

export const decorators = [
	muiTheme([theme]),
]