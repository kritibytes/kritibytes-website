import '../styles/globals.css'
import '../styles/components/Header.css'
import { AppProps } from 'next/app'
import { JssProvider, jss, createGenerateId } from 'react-jss'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  const generateId = createGenerateId()
  return (
    <JssProvider jss={jss} generateId={generateId}>
      <Component {...pageProps} />
    </JssProvider>
  )
}

export default App
