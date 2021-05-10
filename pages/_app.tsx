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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </JssProvider>
  )
}

export default App
