import '../styles/globals.css'
import '../styles/components/Header.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { JssProvider, jss, createGenerateId } from 'react-jss'
import Head from 'next/head'

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const generateId = createGenerateId()
  return (
    <JssProvider jss={jss} generateId={generateId}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </JssProvider>
  )
}

export default App
