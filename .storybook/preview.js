import { darkTheme, lightTheme } from '../styles/theme'
import { themes } from '@storybook/theming'
import { JssProvider, jss as JSS, createGenerateId, ThemeProvider } from 'react-jss';
import { useDarkMode } from 'storybook-dark-mode'
import global from 'jss-plugin-global';
import { useEffect } from 'react'
import AppLayout from '../components/AppLayout'

JSS.use(global())

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    dark: {
      ...themes.dark,
      // appContentBg: darkTheme.background,
      // barBg: darkTheme.background
    }
  }
}

export const decorators = [
  (Story) => {
    const theme = useDarkMode() ? darkTheme : lightTheme

    useEffect(() => {
      var globalStyle = document.getElementById("globalStyle")
      if (globalStyle) {
        globalStyle.innerHTML =
          `
          body{background:${theme.background};}
          *{color:${theme.text};}
        `
      } else {
        document.head.insertAdjacentHTML('beforeend',
          `<style id="globalStyle">
          body{background:${theme.background};}
          *{color:${theme.text};}
        </style > `
        )
      }
    }, [theme])

    return (
      <AppLayout storybook={true} STheme={theme}>
        <Story />
      </AppLayout>
    )

  }
]