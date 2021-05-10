import '../styles/globals.css'
import '../styles/components/Header.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { JssProvider, jss as JSS, createGenerateId, ThemeProvider, createUseStyles } from 'react-jss';
import { darkTheme, lightTheme, ITheme } from '../styles/theme';
import Head from 'next/head'
import { useState, useEffect } from 'react';
import ToggleThemeBtn from '../components/ToggleThemeBtn';
import global from 'jss-plugin-global'

JSS.use(global())

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const [theme, setTheme] = useState({})
  const generateId = createGenerateId()

  useEffect(() => {
    if (Object.keys(theme).length == 0) {
      setTheme(localStorage.getItem('kritibytes_theme') == "light" ? lightTheme : darkTheme)
    }
    localStorage.setItem('kritibytes_theme', theme == lightTheme ? "light" : "dark")
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
    <JssProvider jss={JSS} generateId={generateId}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
          <title>Kritibytes</title>
          <meta name="description" content="We are creating tech stuff for helping community!"></meta>
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://kritibytes.tk/" />
          <meta charSet="UTF-8" />
          <meta property="og:title" content="Kritibytes" key="ogtitle" />
          <meta property="og:url" content="https://kritibytes.tk/" key="ogurl" />
          <meta property="og:image" content="https://kritibytes.tk/banner.png" key="ogimage" />
          <meta property="og:description" content="We are creating tech stuff for helping community!" key="ogdesc" />
        </Head>
        <Component {...pageProps} />
        <ToggleThemeBtn activeTheme={theme == lightTheme ? "light" : "dark"} onClick={() => { theme == lightTheme ? setTheme(darkTheme) : setTheme(lightTheme) }} />
      </ThemeProvider>
    </JssProvider>
  )
}

export default App
