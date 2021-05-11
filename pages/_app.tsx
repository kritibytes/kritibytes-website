import '../styles/globals.css'
import '../styles/components/Header.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import AppLayout from '../components/AppLayout'

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
)

export default App